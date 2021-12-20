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
import useBets from "@src/hooks/bets";

const Home = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [chooseGame, setChooseGame] = useState({ id: 0, index: 0 });
  const { failure, openFailure, closeFailure } = useFailure();
  const { bets, getBets, formatPriceCreateAt } = useBets();

  const serveData = async () => {
    try {
      const response = await axios.get(urlBase + "cart_games", {
        headers: headerBase,
      });
      const data = await response.data;
      setGames(data.types);
      setChooseGame({ id: data.types[0].id, index: 0 });

      getBets();
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
          {bets.length > 0 &&
            bets?.map((value) => (
              <MyGamesRecents
                numbers={value.choosen_numbers}
                priceDate={formatPriceCreateAt(value)}
                typeGame={value.type.type}
                typeColor={
                  games.filter((game) => game.id === value.game_id)[0].color
                }
              />
            ))}
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
