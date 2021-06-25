const initialState = {
  userDetails: [],
  products: [{ name: "Sachin", age: 123 }],
  cart: [],
};

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      debugger;
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export default Reducers;
