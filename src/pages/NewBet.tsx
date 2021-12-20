import Cart from "@components/Cart";
import Footer from "@components/footer";
import TwoViews from "@components/TwoViews";
import { headerBase, urlBase } from "@src/constants/api_constants";
import Game from "@src/types/game.type";
import axios from "axios";
import { useEffect, useState } from "react";
import ActionCart from "@components/ActionsCart";
import NumbersChoose from "@components/NumbersChoose";
import Header from "@components/Header/Header";
import ButtonsChose from "@components/ButtonsChose";
import Error from "@components/UI/Error";
import useFailure from "@src/hooks/failure";
import mensagesFailure from "@src/common/messages_failure";
import ErrorPortal from "@src/portals/ErrorPortal";

const NewBet = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [chooseGame, setChooseGame] = useState({ id: 0, index: 0 });
  const [ballChoose, setBallChoose] = useState<number[]>([]);
  const { failure, openFailure, closeFailure } = useFailure();
  const [minCart, setMinCart] = useState(0);

  const serveData = async () => {
    try {
      const response = await axios.get(urlBase + "cart_games", {
        headers: headerBase,
      });
      const data = await response.data;
      setGames(data.types);
      setChooseGame({ id: data.types[0].id, index: 0 });
      setMinCart(data.min_cart_value);
    } catch (failure: any) {
      mensagesFailure(failure, openFailure);
    }
  };

  const clearGameHandler = () => {
    setBallChoose([]);
  };

  const setChooseGameHandler = (value: { id: number; index: number }) => {
    setChooseGame(value);
    clearGameHandler();
  };

  useEffect(() => {
    serveData();
  }, []);

  return (
    <>
      <ErrorPortal>
        {failure.enable && (
          <Error menssage={failure.message} close={closeFailure} />
        )}
      </ErrorPortal>
      <Header />
      <TwoViews header={true}>
        <div className="leftDiv">
          <div className="region-game">
            <div className="titles">
              <span className="title-bold">New bet</span>{" "}
              <span className="title">for mega-sena</span>
            </div>
            <div className="subtitle">Choose a game</div>
            <ButtonsChose
              chooseGame={chooseGame}
              setChooseGame={setChooseGameHandler}
              games={games}
            />
            <div className="subtitle">Fill your bet</div>
            <div>{games[chooseGame.index]?.description}</div>
            <NumbersChoose
              setBallChoose={setBallChoose}
              chooseGame={chooseGame}
              games={games}
              ballChoose={ballChoose}
            />
            <ActionCart
              setBallChoose={setBallChoose}
              chooseGame={chooseGame}
              clearGameHandler={clearGameHandler}
              games={games}
              ballChoose={ballChoose}
            />
          </div>
        </div>
        <div className="rightDiv">
          <Cart minCart={minCart} />
        </div>
      </TwoViews>
      <Footer content="Copyright 2021 Luby Software" />
    </>
  );
};

export default NewBet;
