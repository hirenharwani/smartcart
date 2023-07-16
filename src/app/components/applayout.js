import React from "react";
import NavBar from "./navbar";
import { Outlet } from "react-router-dom";

class AppLayout extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <NavBar />
        <Outlet />
      </>
    );
  }
}

export default AppLayout;
