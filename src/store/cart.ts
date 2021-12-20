import { createSlice } from "@reduxjs/toolkit";

export type CartType = {
  id: number;
  color: string;
  numbers: number[];
  price: number;
  type: string;
  id_game: number;
};

type CartRedux = {
  items: CartType[];
};

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
      console.log(state.items);
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
