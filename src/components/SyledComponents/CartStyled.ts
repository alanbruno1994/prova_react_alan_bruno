import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  margin-top: 40px;
  margin-bottom: 40px !important;
  border-radius: 10px;
  width: 317px;

  .cart-title {
    color: #707070;
    text-transform: uppercase;
    font-style: italic;
    font-size: 24px;
    margin: 32px 0px;
    margin-left: 19px;
    font-weight: bold;
  }

  .cart-total {
    color: #707070;
    text-transform: uppercase;
    font-size: 24px;
    margin: 32px 0px;
    font-weight: 300;
  }

  .save {
    height: 96px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #f4f4f4;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      color: #27c383;
      font-size: 35px;
      font-style: italic;
      text-decoration: none;
    }
  }

  .price-total {
    margin: 32px 0px;
  }

  @media (max-width: 1330px) {
    margin: 0 auto;
    margin-top: 30px;
  }

  @media (max-width: 360px) {
    width: 98%;
  }
`;

export default Content;
