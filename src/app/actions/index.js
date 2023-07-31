// action types
export const IS_LOADING = "IS_LOADING";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const UPDATE_PRODUCT = "DELETE_PRODUCT";
export const ADD_TO_CART = "ADD_TO_CART";
export const ON_LOADING = "ON_LOADING";

export function isLoading(flag) {
  return {
    type: IS_LOADING,
    flag,
  };
}

export function setProducts(data) {
  return {
    type: GET_PRODUCTS,
    data: data,
  };
}

export function actionAddProduct(product) {
  return {
    type: ADD_PRODUCT,
    data: product,
  };
}

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    product: product,
  };
}

export function actionDeleteProduct(id) {
  return {
    type: DELETE_PRODUCT,
    id: id,
  };
}

export function actionUpdateProduct(product) {
  return {
    type: UPDATE_PRODUCT,
    product: product,
  };
}
