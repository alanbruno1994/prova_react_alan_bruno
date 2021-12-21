import ActionCart from "@components/ActionsCart";
import ButtonsChose from "@components/ButtonsChose";
import NumbersChoose from "@components/NumbersChoose";
import RegionGameStyled from "@components/SyledComponents/RegionGameStyled";
import Game from "@src/types/game.type";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

const RegionGame: React.FC<{ games: Game[] }> = (props) => {
  const [ballChoose, setBallChoose] = useState<number[]>([]);
  const [chooseGame, setChooseGame] = useState({ id: 0, index: 0 });
  const [enableNumbersChoose, setEnableNumbersChoose] = useState(false);

  useEffect(() => {
    if (props.games[0]) {
      setChooseGame({ id: props.games[0].id, index: 0 });
      setEnableNumbersChoose(true);
    }
  }, [props.games]);

  const setChooseGameHandler = (value: { id: number; index: number }) => {
    setChooseGame(value);
    setTimeout(() => {
      setEnableNumbersChoose(false);
    }, 100);
    setTimeout(() => {
      setEnableNumbersChoose(true);
    }, 100);

    clearGameHandler();
  };

  const clearGameHandler = () => {
    setBallChoose([]);
  };

  const animationTiming = {
    // O tempo de entrada e saida da animacao
    enter: 1000,
    exit: 1000,
  };

  return (
    <RegionGameStyled>
      <>
        <div className="titles">
          <span className="title-bold">New bet</span>{" "}
          <span className="title">
            for{" "}
            {props.games[chooseGame.index] &&
              props.games[chooseGame.index].type}
          </span>
        </div>
        <div className="subtitle">Choose a game</div>
        <ButtonsChose
          chooseGame={chooseGame}
          setChooseGame={setChooseGameHandler}
          games={props.games}
        />
        <div className="subtitle">Fill your bet</div>
        <div>{props.games[chooseGame.index]?.description}</div>
        <CSSTransition
          mountOnEnter //isso aqui e usado para que componente aparece na dom na hora de exibir
          unmountOnExit // Isso aqui e para tiar da dom na hora de esconder
          in={enableNumbersChoose} //Aqui serve para controlar quando esconde e quando mostrar
          timeout={animationTiming}
          classNames={{
            enter: "",
            enterActive: "init",
            exit: "",
            exitActive: "exit",
          }}
        >
          <NumbersChoose
            setBallChoose={setBallChoose}
            chooseGame={chooseGame}
            games={props.games}
            ballChoose={ballChoose}
          />
        </CSSTransition>
        <ActionCart
          setBallChoose={setBallChoose}
          chooseGame={chooseGame}
          clearGameHandler={clearGameHandler}
          games={props.games}
          ballChoose={ballChoose}
        />
      </>
    </RegionGameStyled>
  );
};

export default RegionGame;
