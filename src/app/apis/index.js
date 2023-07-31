import { apiRoutes } from "../utils/index";

const customFetch = async (url, { body, ...customConfig }) => {
  //API call header
  const headers = {
    "Content-type": "application/json; charset=UTF-8;",
  };

  const config = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  try {
    const ApiResponse = await fetch(url, config);
    const data = await ApiResponse.json();
    if (ApiResponse.ok) {
      return {
        data: data,
        success: true,
      };
    } else {
      return {
        message: ApiResponse.statusText,
        success: false,
      };
    }
  } catch (error) {
    return {
      message: error.message,
      success: false,
    };
  }
};

export const getProducts = () => {
  return customFetch(apiRoutes.listProducts(), {
    method: "GET",
  });
};

export const addProduct = (product) => {
  return customFetch(apiRoutes.addProduct(product), {
    method: "POST",
  });
};

export const deleteProduct = (id) => {
  return customFetch(apiRoutes.deleteProduct(id), {
    method: "DELETE",
  });
};

export const updateProduct = (product) => {
  return customFetch(apiRoutes.updateProduct(product), {
    method: "PUT",
  });
};
