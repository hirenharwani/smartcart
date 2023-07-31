import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <Link to="/"> Products </Link>
          </li>
          <li>
            <Link to="./add"> Add A Product </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
