import React from "react";
import withRouter from "../components/getparams";
import { Store } from "../..";
import { Link } from "react-router-dom";
import { addToCart } from "../actions";
import { toast } from "react-toastify";
class ViewProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    const { id } = this.props.params;
    const products = Store.getState().proReducer.products;
    const product = products.find((obj) => {
      return obj.id == id;
    });
    if (product != {}) {
      this.setState(() => ({
        product: product,
      }));
    }
  }

  handleAddTocart = (product) => {
    Store.dispatch(addToCart(product), this.showAddToCartNotification(product));
  };

  showAddToCartNotification = (product) => {
    const { isFound } = Store.getState().rTReducer;
    if (isFound) {
      toast("Product is already in the cart");
    } else {
      toast("Product has been added To cart");
    }
  };

  render() {
    const product = this.state.product;
    return (
      <>
        <section className="products-listing">
          <div className="container inner-wrapper">
            <div className="listings">
              <div className="single-wrapper">
                <div className="thumbnail">
                  <img src={product.thumbnail} width="300" height="210" />
                </div>
                <div className="mid-wrapper">
                  <h3 className="title">{product.title}</h3>
                  <p className="description">{product.description}</p>
                  <p className="price">{product.price}</p>
                  <div className="add-to-cart">
                    <button onClick={() => this.handleAddTocart(product)}>
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withRouter(ViewProduct);
