import styled from "styled-components";

const HeaderStyled = styled.header`
  height: 70px;
  width: 85%;
  margin: 0 auto;

  .tgl_links {
    display: flex;
  }

  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    a {
      color: #707070;
      font-size: 20px;
      font-weight: 500;
      font-style: italic;
      text-decoration: none;
      margin-left: 60px;
    }
  }

  .TwoElements {
    display: flex;
    margin-top: 10px;

    span,
    a {
      background: #f7f7f7;
      color: #707070;
      font-size: 20px;
      font-weight: 500;
      font-style: italic;
      display: flex;
      align-items: center;
      text-decoration: none;
    }

    & > span {
      margin-right: 40px;
    }

    a {
      border: 0px;
      cursor: pointer;
    }
  }

  a:hover {
    color: #505050;
  }
`;

const Space = styled.div`
  height: 2px;
  width: 100%;
  background-color: #ebebeb;
`;

export { HeaderStyled, Space };
