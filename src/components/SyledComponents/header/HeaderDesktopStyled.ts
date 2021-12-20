import styled from "styled-components";

const HeaderDesktopStyled = styled.div`
  .desktop {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .TGLHome {
    font-size: 44px;
    color: #707070;
    font-weight: bolder;
    font-style: italic;
    display: flex;
    flex-direction: column;
    width: 107px;
    text-align: center;
    margin-top: 10px;

    div {
      width: 107px;
      height: 7px;
      position: absolute;
      top: 68px;
      background-color: #b5c401;
    }
  }

  @media (max-width: 768px) {
    .desktop {
      display: none;
    }
  }
`;

export default HeaderDesktopStyled;
