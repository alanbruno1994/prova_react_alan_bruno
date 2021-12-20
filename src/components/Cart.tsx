import mensagesFailure from "@src/common/messages_failure";
import { headerBase, urlBase } from "@src/constants/api_constants";
import useFailure from "@src/hooks/failure";
import ErrorPortal from "@src/portals/ErrorPortal";
import { CartType } from "@src/store/cart";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import BoxCart from "./BoxCart";
import Erro from "./UI/Error";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  margin-top: 40px;
  margin-bottom: 40px !important;
  border-radius: 10px;
  width: 317px;

  .cart-title {
    color: #707070;
    text-transform: uppercase;
    font-style: italic;
    font-size: 24px;
    margin: 32px 0px;
    margin-left: 19px;
    font-weight: bold;
  }

  .cart-total {
    color: #707070;
    text-transform: uppercase;
    font-size: 24px;
    margin: 32px 0px;
    font-weight: 300;
  }

  .save {
    height: 96px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #f4f4f4;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      color: #27c383;
      font-size: 35px;
      font-style: italic;
      text-decoration: none;
    }
  }

  .price-total {
    margin: 32px 0px;
  }

  @media (max-width: 1330px) {
    margin: 0 auto;
    margin-top: 30px;
  }

  @media (max-width: 360px) {
    width: 98%;
  }
`;

const Cart: React.FC<{ minCart: number }> = (props) => {
  const itemsCart: CartType[] = useSelector((state: any) => state.cart.items);
  const [total, setTotal] = useState(0);
  const { failure, openFailure, closeFailure } = useFailure();
  const games = useSelector((state: any) => state.cart);
  const login = useSelector((state: any) => state.login);

  useEffect(() => {
    let count = itemsCart.reduce(
      (previous, current) => previous + current.price,
      0
    );
    setTotal(count);
  }, [itemsCart]);

  const buyBetsHandler = async (event: React.MouseEvent) => {
    event.preventDefault();
    console.log(login);
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
    } catch (error: any) {
      mensagesFailure(error, openFailure);
    }
  };

  return (
    <>
      <ErrorPortal>
        {failure.enable && (
          <Erro menssage={failure.message} close={closeFailure} />
        )}
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
