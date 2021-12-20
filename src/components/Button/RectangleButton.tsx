import styled from "styled-components";

const Button = styled.button<{
  background?: string;
  colorText?: string;
  marginRight?: string;
}>`
  background: ${(props) => (props.background ? props.background : "#F7F7F7")};
  font-size: 16px;
  color: ${(props) => (props.colorText ? props.colorText : "#27C383")};
  box-sizing: 1px;
  border-color: #27c383;
  border-radius: 10px;
  height: 52px;
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "0px")};
  .content {
    margin: 0px 20px;

    .separate {
      margin-left: 12px;
    }
  }
`;

const RectangleButton: React.FC<{
  background?: string;
  colorText?: string;
  marginRight?: string;
  action?: (value: any) => void;
}> = (props) => {
  return (
    <Button
      onClick={props.action}
      marginRight={props.marginRight}
      background={props.background}
      colorText={props.colorText}
    >
      <span className="content">{props.children}</span>
    </Button>
  );
};

export default RectangleButton;
