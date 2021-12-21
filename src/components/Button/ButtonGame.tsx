import styled from "styled-components";

const Button = styled.button<{ colorText: string; backGround: string }>`
  background: ${(props) => props.backGround};
  color: ${(props) => props.colorText};
  width: 113px;
  height: 34px;
  border-radius: 100px;
  font-style: italic;
  font-size: 14px;
  border-color: ${(props) => props.colorText};
  user-select: none;
`;

const ButtonGame: React.FC<{
  text: string;
  backGround: string;
  colorText: string;
  id: number;
  index: number;
  chooseHandler: (value: number, index: number) => void;
}> = (props) => {
  return (
    <Button
      onClick={(_) => props.chooseHandler(props.id, props.index)}
      backGround={props.backGround}
      colorText={props.colorText}
    >
      {props.text}
    </Button>
  );
};

export default ButtonGame;
