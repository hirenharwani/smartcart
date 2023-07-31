import React from "react";
import { Products } from "../components";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <Products />
      </>
    );
  }
}

export default Home;
