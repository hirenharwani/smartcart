// action types
export const IS_LOADING = "IS_LOADING";
export const GET_PRODUCTS = "GET_PRODUCTS";
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

export function addToCart(id) {
  return {
    type: ADD_TO_CART,
    id: id,
  };
}
