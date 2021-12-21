import styled from "styled-components";

const Content = styled.div`
  .menu {
    display: flex;
    flex-direction: column;
    height: 100%;
    z-index: 300;
    width: 40%;
    position: fixed;
    right: 0px;
    opacity: 1;
    border-top-left-radius: 10px;
    max-width: 300px;
    background-color: #f7f7f7;
    top: 0px;
    min-width: 220px;

    .header {
      display: flex;
      background-color: white;
      height: 80px;
      opacity: 1;
      border-top-left-radius: 10px;
      justify-content: space-between;

      .mobile-link {
        display: flex;
        align-items: center;
        margin-right: 15px;
        margin-top: 10px;
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
        margin-top: 20px;
        margin-left: 12px;

        div {
          width: 107px;
          margin-left: 2px;
          height: 7px;
          position: absolute;
          top: 76px;
          background-color: #b5c401;
        }
      }
    }
    .body {
      min-height: calc(100vh - 80px);
      display: flex;
      flex-direction: column;

      a {
        text-decoration: none;
        color: #707070;
        font-size: 24px;
        margin: 20px 0px;
        margin-left: 15px;
        font-style: italic;
      }
    }
  }
`;

export default Content;