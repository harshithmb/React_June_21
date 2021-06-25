import { combineReducers, createStore } from "redux";
import { userReducer, productReducer } from "../reducers";

const rootReducer = combineReducers({
  userReducer,
  prodReducer: productReducer,
});
const store = createStore(rootReducer);

export default store;

// store = {
//     userReducer: {
//         userDetails: "", //initialstates
//         login:""
//     },
//     producerReducer: {
//         products: []//
//     }
// }
