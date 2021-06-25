import * as actionTypes from "../actionTypes";

const initialState = {
  products: [{ name: "Sachin", age: 123 }],
  cart: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_PRODUCTS:
      return { ...state, products: payload };
    case actionTypes.ADD_PRODUCT: {
      const productId = payload.id;
      const { cart } = state;
      let updateProducts = [];
      const index = cart.findIndex((item) => item.id === productId);
      if (index !== -1) {
        cart[index].quantity = cart[index].quantity + 1;
        updateProducts = cart;
      } else {
        updateProducts = [...cart, { ...payload, quantity: 1 }];
      }
      return { ...state, cart: updateProducts };
    }
    default:
      return state;
  }
};

const initailUser = {
  userDetails: {},
  userName: "Jayanth",
  login: false,
  status: true,
};

export const userReducer = (state = initailUser, { type, payload }) => {
  switch (type) {
    case actionTypes.USER_DETAILS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
