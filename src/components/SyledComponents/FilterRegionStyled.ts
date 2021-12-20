import styled from "styled-components";

const FilterRegionStyled = styled.div`
  display: flex;

  .filter {
    font-size: 17px;
    color: #868686;
    font-style: italic;
    font-weight: 100;
  }

  button {
    margin: 0px 15px;
  }

  @media (max-width: 900px) {
    margin-top: 20px;
  }

  @media (max-width: 620px) {
    flex-direction: column;

    .buttons-choose {
      display: flex;
      flex-direction: column;
      align-items: center;
      button {
        width: 90%;
        margin: 10px 0px;
      }
    }
  }
`;

export default FilterRegionStyled;
