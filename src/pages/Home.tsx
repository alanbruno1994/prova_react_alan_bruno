import Footer from "@components/footer";
import MyGamesRecents from "@components/MyGamesRecents";
import TwoViews from "@components/TwoViews";
import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Header from "@components/Header/Header";
import FilterRegion from "@components/FilterRegion";
import ErrorPortal from "@src/portals/ErrorPortal";
import useBets from "@src/hooks/bets";
import useGames from "@src/hooks/games";
import useFailure from "@src/hooks/failure";
import CardAnimation from "@src/animation/CardMsgAnimation";

const Home = () => {
  const [chooseGame, setChooseGame] = useState({ id: 0, index: 0 });
  const { failure, openFailure, closeFailure } = useFailure();
  const { games } = useGames(openFailure);
  const { bets, getBets, formatPriceCreateAt } = useBets(openFailure);

  const handlerChooseGame = (value: { id: number; index: number }) => {
    setChooseGame(value);
    getBets("?type%5B%5D=" + games[value.index].type);
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
      <Header />
      <TwoViews header={true} home={true}>
        <div className="leftDiv">
          <div className="header-top-recent-games">
            <span className="title-recent">Recent Games</span>
            <FilterRegion
              games={games}
              chooseGame={chooseGame}
              setChooseGame={handlerChooseGame}
            />
          </div>
          {bets.length > 0 &&
            bets?.map((value, index) => (
              <MyGamesRecents
                key={index}
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
