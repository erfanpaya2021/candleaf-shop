import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
