import BlackBackgound from "@components/SyledComponents/BlackBackground";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

const CardAnimationStyled = styled.div<{ live: boolean }>`
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100vh;
  top: 0px;
  display: ${(props) => (props.live ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  .card {
    position: fixed;
    z-index: 300;
    display: flex;
    width: 350px;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;

    span {
      margin: 20px 10px;
      color: #868686;
      font-style: italic;
    }

    button {
      width: 120px;
      background-color: #27c383;
      font-style: italic;
      color: white;
      font-size: 18px;
      border-radius: 20px;
    }

    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 15px;
    }
  }
  .card-open {
    animation: open 1s ease-in forwards;
  }

  .card-close {
    animation: close 1s ease-out forwards;
  }

  @keyframes open {
    0% {
      opacity: 0;
      transform: translateY(-100%); /*Fica fora da tela*/
    }
    50% {
      opacity: 1;
      transform: translateY(90%); /*fica em baixo da tela*/
    }
    100% {
      opacity: 1;
      transform: translateY(0); /*Fica no centro da tela*/
    }
  }

  @keyframes close {
    0% {
      opacity: 1;
      transform: translateY(0); /*Fica no centro da tela*/
    }
    50% {
      opacity: 0.5;
      transform: translateY(90%); /*fica em baixo da tela*/
    }
    100% {
      opacity: 0;
      transform: translateY(-100%); /*Fica fora da tela*/
    }
  }
`;

const animationTiming = {
  // O tempo de entrada e saida da animacao
  enter: 1000,
  exit: 1000,
};

const CardAnimation: React.FC<{
  enable: boolean;
  closeEnable: () => void;
  menssage: string;
}> = (props) => {
  const [enable, setEnable] = useState(props.enable);

  useEffect(() => {
    setEnable(props.enable);
  }, [props.enable]);

  const closeHandler = () => {
    setEnable(false);
  };

  function closeKiled() {
    props.closeEnable();
  }

  return (
    <>
      <CardAnimationStyled live={props.enable}>
        {props.enable && <BlackBackgound intensity={0.6} />}
        <CSSTransition
          mountOnEnter //isso aqui e usado para que componente aparece na dom na hora de exibir
          unmountOnExit // Isso aqui e para tiar da dom na hora de esconder
          in={enable} //Aqui serve para controlar quando esconde e quando mostrar
          timeout={animationTiming}
          classNames={{
            enter: "",
            enterActive: "card-open",
            exit: "",
            exitActive: "card-close",
          }}
          onExited={closeKiled}
        >
          <>
            <div className="card">
              <span>{props.menssage}</span>
              <div>
                <button onClick={closeHandler}>Ok</button>
              </div>
            </div>
          </>
        </CSSTransition>
      </CardAnimationStyled>
    </>
  );
};

export default CardAnimation;
