import Game from "@src/types/game.type";
import CicleButton from "./Button/CircleButton";
import NumberChooseStyled from "@components/SyledComponents/NumbersChooseStyled";

type NumberChooseType = {
  ballChoose: number[];
  games: Game[];
  chooseGame: { index: number; id: number };
  setBallChoose: (value: number[]) => void;
};

const NumbersChoose: React.FC<NumberChooseType> = (props) => {
  const chooseBall = (value: number) => {
    if (!props.ballChoose.find((element) => element === value)) {
      if (
        props.ballChoose.length < props.games[props.chooseGame.index].max_number
      ) {
        props.setBallChoose([...props.ballChoose, value]);
      }
    } else {
      props.setBallChoose(
        props.ballChoose.filter((element) => element !== value)
      );
    }
  };

  const generateBalls = () => {
    const vet: JSX.Element[] = [];
    for (let i = 1; i <= props.games[props.chooseGame.index]?.range; i++) {
      vet.push(
        <CicleButton
          ballChoose={props.ballChoose}
          setBallChoose={props.setBallChoose}
          action={chooseBall}
          index={i}
          key={i}
          number={i <= 9 ? "0" + i : "" + i}
        />
      );
    }
    return vet;
  };

  return <NumberChooseStyled>{generateBalls()}</NumberChooseStyled>;
};

export default NumbersChoose;
