import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Products,
  Product,
  Cart,
  NothingFound,
  AppLayout,
} from "./components/index";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  appRouter = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Products />,
          exact: true,
        },
        {
          path: "/product",
          element: <Product />,
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
