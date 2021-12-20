import styled from "styled-components";

const FooterBody = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  text-align: center;

  & > div {
    width: 100%;
    height: 2px;
    background-color: #ebebeb;
  }

  span {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #707070;
    font-size: 15px;
  }
`;

const Footer: React.FC<{ content: string }> = (props) => {
  return (
    <FooterBody>
      <div />
      <span>
        <span>{props.content}</span>
      </span>
    </FooterBody>
  );
};

export default Footer;
