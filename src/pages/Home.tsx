import Footer from "@components/footer";
import MyGamesRecents from "@components/MyGamesRecents";
import TwoViews from "@components/TwoViews";
import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Game from "@src/types/game.type";
import axios from "axios";
import { headerBase, urlBase } from "@src/constants/api_constants";
import { useEffect, useState } from "react";
import Header from "@components/Header/Header";
import FilterRegion from "@components/FilterRegion";
import mensagesFailure from "@src/common/messages_failure";

import ErrorPortal from "@src/portals/ErrorPortal";
import useFailure from "@src/hooks/failure";
import Error from "@components/UI/Error";

const Home = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [chooseGame, setChooseGame] = useState({ id: 0, index: 0 });
  const { failure, openFailure, closeFailure } = useFailure();

  const serveData = async () => {
    try {
      const response = await axios.get(urlBase + "cart_games", {
        headers: headerBase,
      });
      const data = await response.data;
      setGames(data.types);
      setChooseGame({ id: data.types[0].id, index: 0 });
    } catch (failure: any) {
      mensagesFailure(failure, openFailure);
    }
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
      <TwoViews header={true} home={true}>
        <div className="leftDiv">
          <div className="header-top-recent-games">
            <span className="title-recent">Recent Games</span>
            <FilterRegion
              games={games}
              chooseGame={chooseGame}
              setChooseGame={setChooseGame}
            />
          </div>
          <MyGamesRecents
            numbers="01, 02,04,05,06,07,09,15,17,20,21,22,23,24,25"
            priceDate="30/11/2020 - (R$ 2,50)"
            typeGame="Lotofácil"
            typeColor="#7F3992"
          />
          <MyGamesRecents
            numbers="01, 02,04,05,06,07,09,15,17,20,21,22,23,24,25"
            priceDate="30/11/2020 - (R$ 2,50)"
            typeGame="Lotofácil"
            typeColor="#7F3992"
          />
          <MyGamesRecents
            numbers="01, 02,04,05,06,07,09,15,17,20,21,22,23,24,25"
            priceDate="30/11/2020 - (R$ 2,50)"
            typeGame="Lotofácil"
            typeColor="#7F3992"
          />
        </div>
        <div className="rightDiv">
          <div className="DivContentNewBet">
            <NavLink to="/new-bet" className="NewBet">
              New Bet <BsArrowRight size={24} />
            </NavLink>
          </div>
        </div>
      </TwoViews>
      <Footer content="Copyright 2021 Luby Software" />
    </>
  );
};

export default Home;
