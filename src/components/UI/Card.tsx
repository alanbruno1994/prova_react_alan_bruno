import styled from "styled-components";

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 352px;
  border-radius: 14px;
  box-shadow: 0px 3px 25px #00000014;
  border: 1px solid #dddddd;

  @media (max-width: 410px) {
    width: 95%;
  }
`;

const Card: React.FC = (props) => {
  return <CardBody>{props.children}</CardBody>;
};

export default Card;
