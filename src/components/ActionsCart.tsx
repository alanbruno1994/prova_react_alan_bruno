import { BsCart3 } from "react-icons/bs";
import { useDispatch } from "react-redux";
import RectangleButton from "./Button/RectangleButton";
import { cartActions } from "@src/store/cart";
import Game from "@src/types/game.type";
import ActionCartStyled from "./SyledComponents/ActionCartStyled";

type ActionCartType = {
  clearGameHandler: () => void;
  games: Game[];
  chooseGame: { id: number; index: number };
  ballChoose: number[];
  setBallChoose: (value: number[]) => void;
};

const ActionCart: React.FC<ActionCartType> = (props) => {
  const dispatch = useDispatch();

  const completeGameHandler = () => {
    let numbers = [...props.ballChoose];
    const generate = () => {
      let value = Math.floor(
        Math.random() * props.games[props.chooseGame.index].range
      );

      if (value === 0) {
        generate();
      } else if (numbers.find((element) => value === element)) {
        generate();
      } else {
        numbers.push(value);
      }

      if (numbers.length < props.games[props.chooseGame.index].max_number) {
        generate();
      }
    };
    if (
      props.ballChoose.length < props.games[props.chooseGame.index].max_number
    )
      generate();

    console.log(numbers);

    props.setBallChoose(numbers);
  };

  const addCartHandler = () => {
    dispatch(
      cartActions.addCart({
        id: Date.now(),
        type: props.games[props.chooseGame.index].type,
        price: props.games[props.chooseGame.index].price,
        color: props.games[props.chooseGame.index].color,
        id_game: props.games[props.chooseGame.index].id,
        numbers: props.ballChoose,
      })
    );
    props.clearGameHandler();
  };

  return (
    <ActionCartStyled>
      <div className="button-action-cart_1">
        <RectangleButton action={completeGameHandler} marginRight="25px">
          Complete game
        </RectangleButton>
        <RectangleButton action={props.clearGameHandler}>
          Clear game
        </RectangleButton>
      </div>
      <div className="button-action-cart_2">
        <RectangleButton
          action={addCartHandler}
          background="#27C383"
          colorText="white"
        >
          <BsCart3 size={16} color="white" />
          <span className="separate">Add to cart</span>
        </RectangleButton>
      </div>
    </ActionCartStyled>
  );
};

export default ActionCart;
