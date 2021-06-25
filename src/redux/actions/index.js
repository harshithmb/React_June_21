export const getProducts = (payload) => {
  return {
    type: "GET_PRODUCTS",
    payload,
  };
};
