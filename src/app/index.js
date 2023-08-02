import React from "react";
import index from "./assets/css/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  ViewProduct,
  Cart,
  NothingFound,
  AddProduct,
} from "./views/index";
import { AppLayout } from "./components";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  appRouter = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
          exact: true,
        },
        {
          path: "/add",
          element: <AddProduct />,
          exact: true,
        },
        {
          path: "/product/:id",
          element: <ViewProduct />,
          exact: true,
        },
        {
          path: "/cart",
          element: <Cart />,
          exact: true,
        },
        {
          path: "*",
          element: <NothingFound />,
          exact: true,
        },
      ],
    },
  ]);

  render() {
    return (
      <>
        <RouterProvider router={this.appRouter} />
      </>
    );
  }
}

export default App;
