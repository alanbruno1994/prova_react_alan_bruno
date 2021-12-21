import animationTiming from "@src/constants/timing_animation";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Content from "./SyledComponents/MyGamesRecentsStyled";

const MyGamesRecents: React.FC<{
  numbers: string;
  priceDate: string;
  typeGame: string;
  typeColor: string;
}> = (props) => {
  const [enable, setEnable] = useState(false);

  useEffect(() => {
    setTimeout(() => setEnable(true), 200);
  }, []);

  return (
    <Content typeColor={props.typeColor}>
      <CSSTransition
        mountOnEnter //isso aqui e usado para que componente aparece na dom na hora de exibir
        unmountOnExit // Isso aqui e para tiar da dom na hora de esconder
        in={enable} //Aqui serve para controlar quando esconde e quando mostrar
        timeout={animationTiming}
        classNames={{
          enter: "",
          enterActive: "init",
          exit: "",
          exitActive: "exit",
        }}
      >
        <>
          <div className="bar"></div>
          <div className="infos-recent-games">
            <span className="numbers">{props.numbers}</span>
            <span className="price-date">{props.priceDate}</span>
            <span className="type-game">{props.typeGame}</span>
          </div>
        </>
      </CSSTransition>
    </Content>
  );
};

export default MyGamesRecents;
