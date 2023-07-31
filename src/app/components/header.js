import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./navbar";
import logo from "../assets/media/smartcart.png";
import cartIcon from "../assets/media/cart.svg";
import { connect } from "react-redux";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { proAddedToCart } = this.props;
    return (
      <>
        <header className="header" id="header">
          <section className="container inner-wrapper">
            <div className="logo-wrapper">
              <Link to="./">
                <img src={logo} width="144px" height="87.5px" />
              </Link>
            </div>
            <NavBar />
            <div className="cart">
              <Link to="cart">
                <img src={cartIcon} width="35px" height="35px" />
              </Link>
              <span className="count">{proAddedToCart}</span>
            </div>
          </section>
        </header>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const proAddedToCart = state.rTReducer.proAddedToCart.length;
  return {
    proAddedToCart: proAddedToCart,
  };
};

export default connect(mapStateToProps)(Header);
