import React from "react";
import { Store } from "../../index";
import { connect } from "react-redux";
import { Product } from "../components";
import { Link } from "react-router-dom";
class Cart extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { proAddedToCart, products } = this.props;
    return (
      <>
        <section className="cart products-listing">
          <div className="container inner-wrapper">
            <div className="listings">
              {proAddedToCart?.map((product) => (
                <div className="single-wrapper">
                  <div className="thumbnail">
                    <Link to="/product">
                      <img src={product.thumbnail} width="300" height="210" />
                    </Link>
                  </div>
                  <div className="mid-wrapper">
                    <h3 className="title">{product.title}</h3>
                    <p className="description">{product.description}</p>
                    <p className="price">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { proAddedToCart } = Store.getState().rTReducer;
  const { products } = Store.getState().proReducer;
  return {
    products: products,
    proAddedToCart: proAddedToCart,
  };
};

export default connect(mapStateToProps)(Cart);
