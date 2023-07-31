import {
  IS_LOADING,
  GET_PRODUCTS,
  ADD_TO_CART,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from "../actions/index";
const initProState = {
  products: [],
  status: {
    isSorted: false,
    sortedBy: null,
  },
};

const initNoState = {
  products: {
    Adding: {
      Success: "Product Added Successfully",
      Error: "There was error while adding your product",
    },
    Editing: {
      Success: "Product updated successfully",
      Error: "There was error while saving your product",
    },
  },
  cart: {
    AddedToCart: "Product Has been Added to cart",
    RemovedFromCart: "Removed from cart",
    Error: {
      whileAddingToCart: "Your product wasn't added to cart",
      whileRemovingFromCart: "Your product wasn't removed from cart",
    },
  },
};

const initRealTimeState = {
  isLoading: true,
  proAddedToCart: [],
  noOfAddToCart: null,
};

const initAppState = {
  products: initProState,
  notifications: initNoState,
  status: initRealTimeState,
};

const proReducer = (state = initProState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.data,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.data],
      };
    case DELETE_PRODUCT:
      const filteredProducts = state.products.filter(
        (product) => product.id !== action.id
      );
      return {
        ...state,
        products: filteredProducts,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
      };
    default:
      return state;
  }
};

const rTReducer = (state = initRealTimeState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.proAddedToCart.includes(action.product)) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          proAddedToCart: [action.product, ...state.proAddedToCart],
        };
      }
    default:
      return state;
  }
};

const rootReducer = (state = initAppState, action) => {
  return {
    proReducer: proReducer(state.proReducer, action),
    rTReducer: rTReducer(state.rTReducer, action),
  };
};

export { rootReducer };
