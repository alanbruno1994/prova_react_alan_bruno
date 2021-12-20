import styled from "styled-components";

const Div = styled.div<{ isHeader: boolean; home?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  width: 85%;
  margin: 0 auto;
  padding-top: ${(props) => (props.home ? "70px" : "0px")};
  min-height: ${(props) =>
    !props.isHeader ? "calc(100vh - 70px)" : "calc(100vh - 142px)"};
  max-height: auto;

  & > div {
    height: 100%;
    width: 50%;
  }

  .leftDiv {
    width: 80%;
    .header-top-recent-games {
      display: flex;

      .title-recent {
        font-size: 24px;
        text-transform: uppercase;
        color: #707070;
        font-weight: bold;
        font-style: italic;
        margin-right: 60px;
      }
    }

    .region-game {
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
    }
  }

  .rightDiv {
    width: 20%;
  }
  .DivContentNewBet {
    display: flex;
    justify-content: flex-end;

    .NewBet {
      font-size: 24px;
      text-decoration: none;
      color: #b5c401;
      font-weight: bold;
      font-style: italic;
      text-align: right;
    }
  }

  @media (max-width: 1330px) {
    .leftDiv,
    .rightDiv {
      width: 100%;
    }

    .DivContentNewBet {
      justify-content: flex-start;

      .NewBet {
        text-align: left;
      }
    }
  }

  @media (max-width: 900px) {
    .header-top-recent-games {
      flex-direction: column;
    }
  }

  @media (max-width: 360px) {
    width: 98%;
    .title-recent {
      font-size: 18px;
    }
  }
`;
const TwoViews: React.FC<{ header: boolean; home?: boolean }> = (props) => {
  return (
    <Div isHeader={props.header} home={props.home}>
      {props.children}
    </Div>
  );
};

export default TwoViews;
