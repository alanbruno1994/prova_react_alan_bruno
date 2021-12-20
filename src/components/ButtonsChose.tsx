import Game from "@src/types/game.type";
import styled from "styled-components";
import ButtonGame from "./Button/ButtonGame";

type Chose = { id: number; index: number };

const Body = styled.div`
  display: flex;

  button {
    margin: 0px 10px;
  }

  @media (max-width: 620px) {
    flex-direction: column;
    align-items: center;
    button {
      width: 90%;
      margin: 10px 10px;
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
      {props.games.map((game: Game, index) => {
        if (game.id === props.chooseGame.id) {
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
    </Body>
  );
};

export default ButtonsChose;
