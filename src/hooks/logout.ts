import { loginActions } from "@src/store/login";
import { cartActions } from "@src/store/cart";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function useLogout() {
  const dispatch = useDispatch();
  const navigate = useHistory();

  function logoutHandler() {
    dispatch(loginActions.logout());
    dispatch(cartActions.clearCart());
    navigate.replace("/");
  }

  return logoutHandler;
}
