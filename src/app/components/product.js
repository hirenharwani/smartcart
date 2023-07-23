import React from "react";
import editSvg from "../assets/media/scEdit.svg";
import deleteSvg from "../assets/media/scDelete.svg";

class Product extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {}
  render() {
    const product = this.props.product;
    const handleDelete = this.props.handleDelete;
    const handleEdit = this.props.handleEdit;
    const handleAddTocart = this.props.handleAddTocart;
    return (
      <>
        <tr>
          <td>
            <div className="thumbnail">
              <img src={product.thumbnail} />
            </div>
          </td>
          <td>
            <div className="mid-wrapper">
              <h4 className="title">{product.title}</h4>
              <div className="price">{product.price}</div>
              <div className="add-to-cart">
                <button onClick={() => handleAddTocart(product.id)}>
                  Add To Cart
                </button>
              </div>
            </div>
          </td>
          <td>
            <div className="right-wrapper">
              <p className="description">{product.description}</p>
              <div className="actions">
                <img
                  src={editSvg}
                  className="edit"
                  onClick={() => handleEdit(product)}
                />
                <img
                  src={deleteSvg}
                  className="delete"
                  onClick={() => handleDelete(product.id)}
                />
              </div>
            </div>
          </td>
        </tr>
      </>
    );
  }
}

export default Product;
