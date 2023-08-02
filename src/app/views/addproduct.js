import React from "react";
import { getProducts, addProduct } from "../apis";
import { Store } from "../../index";
import { actionAddProduct } from "../actions";
import { Navigate } from "react-router-dom";

class AddProduct extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}
  AddProduct = (event) => {
    event.preventDefault();
    const target = event.target;
    const id = target.id.value;
    const title = target.title.value;
    const description = target.description.value;
    const price = target.price.value;
    const thumbnail = target.thumbnail.value;

    if (title == "" || description == "" || price == "") {
      return;
    }

    const add = async () => {
      const product = {
        id,
        title,
        description,
        price,
        thumbnail,
      };
      const response = await addProduct(product);
      const { data, success } = response;
      if (success) {
        Store.dispatch(actionAddProduct(product));
      }
    };
    add();
  };

  render() {
    const { products } = Store.getState().proReducer;
    const id = products.length + 1;
    return (
      <>
        <section className="add-product">
          <div className="container inner-wrapper">
            <h2 className="heading">Add New Product</h2>
            <form
              onSubmit={(event) => {
                this.AddProduct(event);
              }}
              method="POST"
            >
              <input type="text" name="title" placeholder="Title" required />
              <input
                type="textarea"
                name="description"
                placeholder="Description"
                required
              />
              <input
                type="number"
                name="price"
                placeholder="Sale Price"
                required
              />
              <input type="file" name="thumbnail" />
              <input type="hidden" name="id" value={id} />
              <input type="submit" value="Submit" required />
            </form>
          </div>
        </section>
      </>
    );
  }
}

export default AddProduct;
