import BlackBackgound from "@components/SyledComponents/BlackBackground";
import styled from "styled-components";

const BodyMessage = styled.div`
  position: fixed;
  z-index: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  top: 0px;

  .region-message {
    width: 350px;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;

    span {
      margin: 20px 10px;
      color: #868686;
      font-style: italic;
    }

    button {
      width: 120px;
      background-color: #27c383;
      font-style: italic;
      color: white;
      font-size: 18px;
      border-radius: 20px;
    }

    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 15px;
    }
  }
`;

const Error: React.FC<{
  menssage: string;
  close: () => void;
}> = (props) => {
  return (
    <>
      <BlackBackgound intensity={0.6} />
      <BodyMessage>
        <div className="region-message">
          <span>{props.menssage}</span>
          <div>
            <button onClick={(_) => props.close()}>Ok</button>
          </div>
        </div>
      </BodyMessage>
    </>
  );
};

export default Error;
