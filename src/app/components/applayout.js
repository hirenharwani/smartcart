import React from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class AppLayout extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <Header />
        <Outlet />
        <ToastContainer />
      </>
    );
  }
}

export default AppLayout;
