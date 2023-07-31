const apiRoute = "https://my-json-server.typicode.com/hirenharwani/smartcart";
export const apiRoutes = {
  listProducts: () => `${apiRoute}/products?_page=1&_limit=30`,
  addProduct: () => `${apiRoute}/products`,
  deleteProduct: (id) => `${apiRoute}/products/${id}`,
  updateProduct: (product) => `${apiRoute}/products/${product.id}`,
};
