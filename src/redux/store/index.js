import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer, productReducer } from "../reducers";

const rootReducer = combineReducers({
  userReducer,
  prodReducer: productReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

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
