import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer, productReducer } from "../reducers";

const rootReducer = combineReducers({
  userReducer,
  prodReducer: productReducer,
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Redux Dev Tools
);

export default store;

// store = {
//     userReducer: {
//         userDetails: "", //initialstates
//         login:""
//     },
//     prodReducer: {
//         products: []//
//     }
// }
