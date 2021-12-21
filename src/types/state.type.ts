import { LoginRedux } from "./login.type";
import { CartRedux } from "./cart.type";

export type State = {
  login: LoginRedux;
  cart: {
    items: CartRedux;
  };
};
