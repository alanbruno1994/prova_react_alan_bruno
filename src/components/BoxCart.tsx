import styled from "styled-components";
import { VscTrash } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { cartActions } from "@src/store/cart";

const Content = styled.div`
  display: flex;
  margin: 10px 0px;

  .trash {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .spacing {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background: ${(props) => props.color};
    width: 4px;
    height: 86px;
  }

  .infos {
    margin-left: 10px;
    display: flex;
    flex-direction: column;

    .numbers,
    span {
      margin: 10px 0px;
    }

    .numbers {
      color: #868686;
      font-size: 15px;
      font-style: italic;
    }

    .type-game {
      margin-right: 10px;
      font-size: 16px;
      color: ${(props) => props.color};
    }

    .price-game {
      font-size: 16px;
      font-weight: 200;
    }
  }
`;

const BoxCart: React.FC<{
  numbers: string;
  pricaGame: number;
  typeGame: string;
  id: number;
  color: string;
}> = (props) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(cartActions.removeCart(props.id));
  };

  return (
    <Content color={props.color}>
      <div className="trash">
        <VscTrash onClick={deleteHandler} size={24} />
      </div>
      <div className="spacing"></div>
      <div className="infos">
        <span className="numbers">{props.numbers}</span>
        <span>
          <span className="type-game">{props.typeGame}</span>
          <span className="price-game">
            R${" "}
            {props.pricaGame.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </span>
      </div>
    </Content>
  );
};

export default BoxCart;
