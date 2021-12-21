import { useEffect, useState } from "react";
import styled from "styled-components";

const Button = styled.button<{ background?: string; hover: string }>`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  border: 0px;
  background: ${(props) => (props.background ? props.background : "#ADC0C4")};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin: 8px 5px;
  user-select: none;

  &:hover {
    background-color: ${(props) => props.hover};
  }

  @media (max-width: 705) {
    width: 50px;
    height: 50px;
  }
`;

const CicleButton: React.FC<{
  number: string;
  index: number;
  action: (value: number) => void;
  ballChoose: number[];
  setBallChoose: (value: number[]) => void;
}> = (props) => {
  const [marked, setMaked] = useState<boolean>(false);

  useEffect(() => {
    const value = props.ballChoose.find((value) => value === props.index);
    setMaked(!!value);
  }, [props]);

  return (
    <Button
      background={marked ? "#01AC66" : "#ADC0C4"}
      hover={marked ? "#02d981" : "#b8cbcf"}
      onClick={(_) => props.action(props.index)}
    >
      <span>{props.number}</span>
    </Button>
  );
};

export default CicleButton;
