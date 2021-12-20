import ButtonGame from "@components/Button/ButtonGame";
import Footer from "@components/footer";
import Header from "@components/Header";
import MyGamesRecents from "@components/MyGamesRecents";
import TwoViews from "@components/TwoViews";
import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import useLogout from "@src/hooks/logout";
import Game from "@src/types/game.type";
import axios from "axios";
import { headerBase, urlBase } from "@src/constants/api_constants";
import { useEffect, useState } from "react";

const Home = () => {
  const logoutHandler = useLogout();
  const [games, setGames] = useState<Game[]>([]);
  const [chooseGame, setChooseGame] = useState(0);

  const serveData = async () => {
    const response = await axios.get(urlBase + "cart_games", {
      headers: headerBase,
    });
    const data = await response.data;
    setGames(data.types);
    setChooseGame(data.types[0].id);
  };

  useEffect(() => {
    serveData();
  }, []);

  const chooseGameHandler = (choose: number, index: number) => {
    setChooseGame(choose);
  };

  return (
    <>
      <Header>
        <div className="TGLHome">
          TGL
          <div />
        </div>
        <div className="TwoElements">
          <span>
            <span>Account</span>
          </span>
          <button onClick={logoutHandler}>
            Log out &nbsp; <BsArrowRight size={24} />
          </button>
        </div>
      </Header>
      <TwoViews header={true} home={true}>
        <div className="leftDiv">
          <div className="header-top-recent-games">
            <span className="title-recent">Recent Games</span>
            <div className="filter-div">
              <span className="filter">Filters</span>
              {games.map((game: Game, index) => {
                if (game.id === chooseGame) {
                  return (
                    <ButtonGame
                      index={index}
                      id={game.id}
                      chooseHandler={chooseGameHandler}
                      key={game.id}
                      text={game.type}
                      backGround={game.color}
                      colorText="white"
                    />
                  );
                }
                return (
                  <ButtonGame
                    index={index}
                    id={game.id}
                    chooseHandler={chooseGameHandler}
                    key={game.id}
                    text={game.type}
                    backGround="white"
                    colorText={game.color}
                  />
                );
              })}
            </div>
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
