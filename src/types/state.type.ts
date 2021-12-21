import { LoginRedux } from "./login.type";
import { CartType } from "./cart.type";

export type State = {
  login: LoginRedux;
  cart: {
    items: CartType[];
  };
};
