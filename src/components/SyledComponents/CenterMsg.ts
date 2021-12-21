import styled from "styled-components";

const CenterMsg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 300;

  .msg {
    color: white;
    font-size: 32px;
    font-weight: bolder;
  }
`;

export default CenterMsg;
