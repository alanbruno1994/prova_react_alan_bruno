import styled from "styled-components";

const Content = styled.div<{ typeColor: string }>`
  display: flex;
  margin-top: 20px;

  .infos-recent-games {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
  }

  .numbers {
    font-size: 20px;
    color: #868686;
    font-style: italic;
  }

  .price-date {
    font-size: 17px;
    color: #868686;
  }

  .type-game {
    font-size: 20px;
    color: ${(props) => props.typeColor};
    font-style: italic;
    font-weight: bold;
  }

  .bar {
    width: 6px;
    background: ${(props) => props.typeColor};
    height: 94px;
    border-radius: 100px;
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
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes finish {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @media (max-width: 460px) {
    .numbers,
    .type-game {
      font-size: 15px;
    }

    .price-date {
      font-size: 12px;
    }
  }

  @media (max-width: 360px) {
    .infos-recent-games {
      margin-left: 10px;
    }
    .numbers,
    .type-game {
      font-size: 13px;
    }

    .price-date {
      font-size: 10px;
    }
  }
`;

export default Content;
