import styled from "styled-components";

const HeaderModileStyled = styled.div`
  .mobile {
    display: none;
  }

  @media (max-width: 768px) {
    .mobile {
      display: flex;
      justify-content: space-between;

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
      .mobile-link {
        display: flex;
        align-items: center;
      }
    }
  }
`;

export default HeaderModileStyled;
