import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/index";
import { legacy_createStore, applyMiddleware } from "redux";
import { rootReducer } from "./app/reducers/index";
import { Provider } from "react-redux";

const thunk = function ({ dispatch, getState }) {
  return function (next) {
    return function (action) {
      if (typeof action == "function") {
        action(dispatch);
        return;
      }
      next(action);
    };
  };
};

const Store = legacy_createStore(rootReducer, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App Store={Store} />
    </Provider>
  </React.StrictMode>
);

export { Store };
