import { IS_LOADING } from "../actions/index";

const scInitProState = {
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
  Status: {
    isSorted: false,
    sortedBy: null,
  },
};

const scInitNoState = {
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

const scAppRealTimeState = {
  isLoading: true,
  noOfProductsAddedToCart: null,
};

const initialAppState = {
  sc_products: scInitProState,
  sc_notifications: scInitNoState,
  sc_status: scAppRealTimeState,
};

const realTimeReducer = (state = scAppRealTimeState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        isLoading: false,
        noOfProductsAddedToCart: 10,
      };
    default:
      return state;
  }
};

const rootReducer = (state = initialAppState, action) => {
  return {
    realTimeReducer: realTimeReducer(scAppRealTimeState, action),
  };
};

export { rootReducer };
