import { createSlice } from "@reduxjs/toolkit";
import { CartRedux, CartType } from "@src/types/cart.type";

const initialCart: CartRedux = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: localStorage.getItem("cartData")
    ? { items: JSON.parse("" + localStorage.getItem("cartData")) }
    : initialCart,
  reducers: {
    addCart(state: CartRedux, action: { payload: CartType }) {
      state.items.push(action.payload);
      localStorage.setItem("cartData", JSON.stringify(state.items));
    },
    removeCart(state: CartRedux, action) {
      state.items = state.items.filter(
        (element) => element.id !== action.payload
      );
      localStorage.setItem("cartData", JSON.stringify(state.items));
    },
    clearCart(state: CartRedux) {
      localStorage.removeItem("cartData");
      state.items = [];
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
