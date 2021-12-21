import CardAnimation from "@src/animation/CardMsgAnimation";
import mensagesFailure from "@src/common/messages_failure";
import { headerBase, urlBase } from "@src/constants/api_constants";
import useFailure from "@src/hooks/failure";
import ErrorPortal from "@src/portals/ErrorPortal";
import { CartType } from "@src/store/cart";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import BoxCart from "./BoxCart";
import { cartActions } from "@src/store/cart";
import Content from "./SyledComponents/CartStyled";

const Cart: React.FC<{ minCart: number }> = (props) => {
  const itemsCart: CartType[] = useSelector((state: any) => state.cart.items);
  const [total, setTotal] = useState(0);
  const { failure, openFailure, closeFailure } = useFailure();
  const games = useSelector((state: any) => state.cart);
  const login = useSelector((state: any) => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    let count = itemsCart.reduce(
      (previous, current) => previous + current.price,
      0
    );
    setTotal(count);
  }, [itemsCart]);

  const buyBetsHandler = async (event: React.MouseEvent) => {
    event.preventDefault();
    try {
      if (total < props.minCart) {
        throw new Error(
          `You did not reach the minimum value of R$ ${props.minCart} in bet`
        );
      }
      await axios.post(
        urlBase + "bet/new-bet",
        {
          games: games.items.map((value: CartType) => ({
            id: value.id_game,
            numbers: value.numbers,
          })),
        },
        { headers: { ...headerBase, Authorization: "Bearer " + login.token } }
      );
      dispatch(cartActions.clearCart());
    } catch (error: any) {
      mensagesFailure(error, openFailure);
    }
  };

  return (
    <>
      <ErrorPortal>
        <CardAnimation
          enable={failure.enable}
          menssage={failure.message}
          closeEnable={closeFailure}
        ></CardAnimation>
      </ErrorPortal>
      <Content>
        <span className="cart-title">Cart</span>
        <div>
          {itemsCart.map((cart) => {
            return (
              <BoxCart
                id={cart.id}
                key={cart.id}
                numbers={cart.numbers
                  .map((value) => (value < 9 ? "0" + value : value))
                  .toString()}
                pricaGame={cart.price}
                typeGame={cart.type}
                color={cart.color}
              />
            );
          })}
        </div>
        <div className="price-total">
          <span className="cart-title">Cart</span>{" "}
          <span className="cart-total">Total</span>{" "}
          <span className="cart-total">
            R${" "}
            {total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
        <div className="save">
          <NavLink to="" onClick={buyBetsHandler}>
            Save <BsArrowRight size={32} />
          </NavLink>
        </div>
      </Content>
    </>
  );
};

export default Cart;
