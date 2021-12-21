import styled from "styled-components";

const RegionGameStyled = styled.div`
  display: flex;
  flex-direction: column;

  .titles {
    margin-top: 60px;
    margin-bottom: 13px;
  }

  .title-bold,
  .title {
    text-transform: uppercase;
    color: #707070;
    font-size: 24px;
    font-style: italic;
    font-weight: 100;
  }

  .title-bold {
    font-weight: bold;
  }

  .subtitle {
    color: #707070;
    font-size: 17px;
    font-style: italic;
    margin-bottom: 15px;
    margin-top: 15px;
  }

  .game-change {
    display: flex;
    margin-top: 30px;
    margin-bottom: 20px;

    button {
      margin-right: 25px;
    }
  }

  .init {
    animation: run 1s ease-in forwards;
  }

  .exit {
    animation: finish 1s ease-out forwards;
  }

  @keyframes run {
    0% {
      opacity: 0;
      transform: scale(0); /*Fica fora da tela*/
    }
    100% {
      opacity: 1;
      transform: scale(1); /*Fica no centro da tela*/
    }
  }

  @keyframes finish {
    0% {
      opacity: 0;
      transform: scale(0); /*Fica fora da tela*/
    }
    100% {
      opacity: 1;
      transform: scale(1); /*Fica no centro da tela*/
    }
  }
`;

export default RegionGameStyled;
