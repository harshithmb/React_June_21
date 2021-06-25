import axios from "axios";

export const getProducts = (payload) => {
  return {
    type: "GET_PRODUCTS",
    payload,
  };
};

export const addProduct = (payload) => {
  return {
    type: "ADD_PRODUCT",
    payload,
  };
};

export const clearCart = (payload) => (dispatch) => {
  // Redux Thunk
  return axios("/clear").then((res) => {
    dispatch({
      type: "CLEAR_CART",
      payload: res,
    });
    dispatch({
      type: "USER_DETAILS",
      payload: res,
    });
  });
};
