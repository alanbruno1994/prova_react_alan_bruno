import Game from "@src/types/game.type";
import styled from "styled-components";
import ButtonGame from "./Button/ButtonGame";

type Chose = { id: number; index: number };

const Body = styled.div`
  flex-wrap: wrap;

  button {
    margin: 6px 10px !important;
    min-width: 113px;
  }

  button:hover {
    font-weight: bolder !important;
  }

  @media (max-width: 620px) {
    flex-direction: column;
    align-items: center;
    button {
      width: 90%;
      margin: 10px 10px !important;
    }
  }
`;

const ButtonsChose: React.FC<{
  games: Game[];
  chooseGame: { id: number; index: number };
  setChooseGame: (value: Chose) => void;
}> = (props) => {
  const chooseGameHandler = (id: number, index: number) => {
    props.setChooseGame({ id, index });
  };
  return (
    <Body>
      {props.games.map((game: Game, index) => (
        <ButtonGame
          index={index}
          id={game.id}
          chooseHandler={chooseGameHandler}
          key={game.id}
          text={game.type}
          backGround={game.id === props.chooseGame.id ? game.color : "white"}
          colorText={game.id === props.chooseGame.id ? "white" : game.color}
        />
      ))}
    </Body>
  );
};

export default ButtonsChose;
