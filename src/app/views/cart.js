import React from "react";
import { Store } from "../../index";
import { connect } from "react-redux";
import { Product } from "../components";
import { Link } from "react-router-dom";
import placeholder from "../assets/media/placeholder.jpg";
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
                    <Link to={`/product/${product.id}`}>
                      {product.thumbnail == "" ? (
                        <img src={placeholder} width="300" height="210" />
                      ) : (
                        <img src={product.thumbnail} width="300" height="210" />
                      )}
                    </Link>
                  </div>
                  <div className="mid-wrapper">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="title">{product.title}</h3>\
                    </Link>
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
