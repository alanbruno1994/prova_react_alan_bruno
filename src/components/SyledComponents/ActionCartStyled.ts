import styled from "styled-components";

const ActionCartStyled = styled.div`
  display: flex;

  .button-action-cart_1 {
    display: flex;
    width: 70%;
  }

  .button-action-cart_2 {
    display: flex;
    width: 30%;
    justify-content: flex-end;
    margin-right: 40px;
  }

  @media (max-width: 760px) {
    flex-direction: column;
    width: 100%;

    .button-action-cart_1,
    .button-action-cart_2 {
      flex-direction: column;
      justify-content: flex-start;
      flex-wrap: wrap;
      width: 100%;

      button {
        width: 100% !important;
        margin: 20px 0px;
      }
    }
  }
`;

export default ActionCartStyled;
