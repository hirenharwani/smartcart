import React from "react";
import { Link } from "react-router-dom";
import editSvg from "../assets/media/scEdit.svg";
import deleteSvg from "../assets/media/scDelete.svg";
import saveSvg from "../assets/media/save.png";
import { toast } from "react-toastify";

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
      isEditing: false,
      isAddedToCart: false,
    };
  }
  componentDidMount() {
    const product = this.props.product;
    this.setState(() => ({
      product: product,
    }));
  }

  handleEdit() {
    this.setState(() => ({
      isEditing: true,
    }));
  }

  handleUpdate() {
    const product = this.state.product;
    const handleUpdate = this.props.handleUpdate;
    if (
      product.title != "" &&
      product.description != "" &&
      product.price != ""
    ) {
      handleUpdate(product);
      this.setState(
        () => ({
          isEditing: false,
        }),
        this.successNotification()
      );
    } else {
      toast("In order to update product. Each field is mandatory!");
    }
  }

  successNotification = () => {
    toast("Product updated successfully");
  };

  handleChange(event) {
    const target = event.target.name;
    const value = event.target.value;
    const product = this.state.product;
    if (target == "title") {
      this.setState(() => ({
        ...this.state,
        product: {
          ...product,
          title: value,
        },
      }));
    } else if (target == "description") {
      this.setState(() => ({
        ...this.state,
        product: {
          ...product,
          description: value,
        },
      }));
    } else {
      this.setState(() => ({
        ...this.state,
        product: {
          ...product,
          price: value,
        },
      }));
    }
  }

  render() {
    const product = this.state.product;
    const handleDelete = this.props.handleDelete;
    const handleAddTocart = this.props.handleAddTocart;
    const { isEditing, isAddedToCart } = this.state;
    return (
      <>
        <div className="single-wrapper">
          <div className="thumbnail">
            <Link to="/product">
              <img src={product.thumbnail} width="300" height="210" />
            </Link>
          </div>
          <div className="mid-wrapper">
            {!isEditing || isAddedToCart ? (
              <>
                <h3 className="title">{product.title}</h3>
                <p className="description">{product.description}</p>
                <p className="price">{product.price}</p>
                {isAddedToCart ? (
                  ""
                ) : (
                  <div className="add-to-cart">
                    <button onClick={() => handleAddTocart(product)}>
                      Add To Cart
                    </button>
                  </div>
                )}
              </>
            ) : (
              <>
                <input
                  type="text"
                  name="title"
                  value={product.title}
                  onChange={(event) => this.handleChange(event)}
                />
                <input
                  type="textarea"
                  name="description"
                  value={product.description}
                  onChange={(event) => this.handleChange(event)}
                />
                <input
                  type="number"
                  name="price"
                  value={product.price}
                  onChange={(event) => this.handleChange(event)}
                />
              </>
            )}

            <div className="actions"> 
              {!isEditing ? (
                <img
                  src={editSvg}
                  className="edit"
                  onClick={() => this.handleEdit()}
                  width="30px"
                  height="30px"
                />
              ) : (
                <img
                  src={saveSvg}
                  className="save"
                  onClick={() => this.handleUpdate()}
                  width="30px"
                  height="30px"
                />
              )}
              <img
                src={deleteSvg}
                className="delete"
                onClick={() => handleDelete(product.id)}
                width="30px"
                height="30px"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Product;
