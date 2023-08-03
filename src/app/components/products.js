import React from "react";
import { getProducts, deleteProduct, updateProduct } from "../apis";
import { Store } from "../../index";
import {
  setProducts,
  addToCart,
  actionDeleteProduct,
  actionUpdateProduct,
} from "../actions";
import Product from "./product";
import Loader from "./loader";
import clear from "../assets/media/x.svg";
import { toast } from "react-toastify";
import { connect } from "react-redux";

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      isSorting: false,
    };
  }

  componentDidMount() {
    const { products } = Store.getState().proReducer;
    const fetchProducts = async () => {
      const response = await getProducts();
      const { data, success } = response;
      const assending = data?.sort((a, b) => a.price - b.price);
      if (success) {
        Store.dispatch(
          setProducts(assending),
          this.setState(() => ({
            products: Store.getState().proReducer.products,
            status: Store.getState().proReducer.status,
            isLoading: false,
          }))
        );
      } else {
      }
    };
    if (products.length == 0) {
      fetchProducts();
    }
  }

  handleAddTocart = (product) => {
    Store.dispatch(addToCart(product), this.showAddToCartNotification(product));
  };

  handleDelete = (id) => {
    const deletePro = async () => {
      const response = await deleteProduct(id);
      const { data, success } = response;
      if (success) {
        Store.dispatch(
          actionDeleteProduct(id),
          this.setState(
            () => ({
              products: Store.getState().proReducer.products,
              status: Store.getState().proReducer.status,
            }),
            this.showDeleteSuccessNotification()
          )
        );
      } else {
        this.showDeleteErrorNotification();
      }
    };
    deletePro(id);
  };

  showAddToCartNotification = (product) => {
    const { isFound } = Store.getState().rTReducer;
    if (isFound) {
      toast("Product is already in the cart");
    } else {
      toast("Product has been added To cart");
    }
  };

  showDeleteSuccessNotification = () => {
    toast("Product deleted successfully");
  };

  showDeleteErrorNotification = () => {
    toast("There was unexpected error while trying to delete product");
  };

  handleUpdate = (product) => {
    const editPro = async () => {
      const response = await updateProduct(product);
      const { data, success } = response;
      if (success) {
        Store.dispatch(
          actionUpdateProduct(product),
          this.setState(() => ({
            products: Store.getState().proReducer.products,
            status: Store.getState().proReducer.status,
          }))
        );
      }
    };
    editPro(product);
  };

  handleSort = (event) => {
    const sortAs = event.target.value;
    const products = Store.getState().proReducer.products;
    if (sortAs == "hightolow") {
      const descending = products.sort((a, b) => b.price - a.price);
      this.setState(() => ({
        ...this.state,
        products: descending,
        isSorting: true,
      }));
    } else {
      const assending = products.sort((a, b) => a.price - b.price);
      this.setState(() => ({
        ...this.state,
        products: assending,
        isSorting: false,
      }));
    }
  };

  render() {
    const { products, isLoading } = Store.getState().proReducer;
    const { isSorting } = this.state;
    return (
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <section className="products-listing">
              <div className="container inner-wrapper">
                <div className="fillter-wrapper">
                  <div className="sorting">
                    {isSorting ? (
                      <img
                        src={clear}
                        width="30px"
                        height="30px"
                        onClick={this.handleSort}
                      />
                    ) : (
                      <span> Sort By </span>
                    )}
                    <select
                      name="sortby"
                      id="sortby"
                      onChange={(event) => this.handleSort(event)}
                      value={isSorting ? "hightolow" : "lowtohigh"}
                    >
                      <option value="lowtohigh">Low to high</option>
                      <option value="hightolow">High to low</option>
                    </select>
                  </div>
                </div>
                <div className="listings">
                  {products?.map((product) => (
                    <Product
                      product={product}
                      key={product.id}
                      handleDelete={this.handleDelete}
                      handleUpdate={this.handleUpdate}
                      handleAddTocart={this.handleAddTocart}
                    />
                  ))}
                </div>
              </div>
            </section>
          </>
        )}
      </>
    );
  }
}

export default Products;
