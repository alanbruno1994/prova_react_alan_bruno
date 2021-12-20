import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "@store/login";
import cartReducer from "@store/cart";

const store = configureStore({
  reducer: { login: loginReducer, cart: cartReducer },
});

export default store;
