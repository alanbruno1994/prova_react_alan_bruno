import styled from "styled-components";

const DIVFather = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 70px);

  & > span,
  & > a {
    font-size: 35px;
    font-style: italic;
    font-weight: bold;
    color: #707070;
  }

  & > a {
    text-decoration: none;
  }

  @media (max-width: 1330px) {
    min-height: auto;
  }

  @media (max-width: 460px) {
    & > span,
    & > a {
      font-size: 25px;
      margin: 20px 0px;
    }
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  & input {
    font-size: 17px;
    font: italic normal bold 17px Helvetica Neue;
    color: #9d9d9d;
    padding: 30px;
    border: 0px;
  }

  & input:hover,
  & input:active {
    border: 0px;
  }

  & > div {
    height: 2px;
    background: #ebebeb;
  }

  & > a {
    color: #c1c1c1;
    font-style: normal;
    text-decoration: none;
    display: flex;
    justify-content: end;
    margin-right: 30px;
    margin-top: 20px;
    font-style: italic;
    font-weight: 400;
  }
`;

const ButtonLogin = styled.button`
  color: #b5c401;
  background-color: white;
  border: 0;
  font-size: 35px;
  font-weight: bold;
  font-family: Helvetica;
  font-style: italic;
  cursor: pointer;
  display: block;
  margin: 40px auto;

  @media (max-width: 460px) {
    font-size: 25px;
  }
`;

export { ButtonLogin, DIVFather, Form };
