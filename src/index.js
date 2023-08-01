import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/index";
import { legacy_createStore, applyMiddleware } from "redux";
import { rootReducer } from "./app/reducers/index";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

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

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const Store = legacy_createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(Store);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App Store={Store} />
    </Provider>
  </React.StrictMode>
);

export { Store, persistor };
