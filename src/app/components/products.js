import React from "react";
import { getProducts } from "../apis";
import { Store } from "../../index";
import { setProducts, addToCart } from "../actions";
import Product from "./product";
import Pagination from "./pagination";

class Products extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const fetchProducts = async () => {
      const response = await getProducts();
      const { data, success } = response;
      if (success) {
        Store.dispatch(
          setProducts(data),
          this.setState(() => ({
            products: Store.getState().proReducer.products,
            status: Store.getState().proReducer.status,
          }))
        );
      } else {
      }
    };
    fetchProducts();
  }

  handleAddTocart = (id) => {
    Store.dispatch(
      addToCart(id),
      this.setState((prevState) => ({}))
    );
  };

  handleDelete = (id) => {};
  handleEdit = (product) => {};
  handleSort = (event) => {};

  render() {
    const products = this.state.products;
    return (
      <>
        <table>
          <tbody>
            <tr>
              <td colSpan={2}></td>
              <td>
                <div className="sorting">
                  <select
                    name="sortby"
                    id="sortby"
                    onChange={(event) => this.handleSort(event)}
                  >
                    <option value="title">Title</option>
                    <option value="price">Price</option>
                  </select>
                </div>
              </td>
            </tr>
            {products?.map((product) => (
              <Product
                product={product}
                key={product.id}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
                handleAddTocart={this.handleAddTocart}
              />
            ))}
          </tbody>
        </table>
        <Pagination />
      </>
    );
  }
}

export default Products;
