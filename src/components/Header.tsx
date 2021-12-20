import { HeaderStyled, Space } from "./SyledComponents/HeaderStyled";

const Header: React.FC = (props) => {
  return (
    <>
      <HeaderStyled>
        <div>{props.children}</div>
      </HeaderStyled>
      <Space />
    </>
  );
};

export default Header;
