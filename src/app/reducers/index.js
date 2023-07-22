import { Store } from "../..";
import { IS_LOADING, GET_PRODUCTS, ADD_TO_CART } from "../actions/index";

const initProState = {
  products: [
    {
      ID: null,
      slug: "",
      Title: "",
      Thumbnails: "",
      Price: "",
      Description: "",
      status: {
        isEditing: false,
        AddedToCart: false,
      },
    },
  ],
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
  cart: {
    products: [],
    noOfAddToCart: null,
  },
};

const initAppState = {
  sc_products: initProState,
  sc_notifications: initNoState,
  sc_status: initRealTimeState,
};

const proReducer = (state = initProState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        products: action.data,
        status: {
          isSorted: false,
          sortedBy: null,
        },
      };
    default:
      return state;
  }
};

const rTReducer = (state = initRealTimeState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          products: [...state.cart.products, action.id],
        },
      };
    default:
      return state;
  }
};

const rootReducer = (state = initAppState, action) => {
  console.log(initAppState);
  return {
    proReducer: proReducer(state.sc_products, action),
    rTReducer: rTReducer(state.sc_status, action),
  };
};

export { rootReducer };
