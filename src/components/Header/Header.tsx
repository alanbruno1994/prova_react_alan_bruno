import {
  HeaderStyled,
  Space,
} from "@components/SyledComponents/header/HeaderStyled";
import { Route, Switch } from "react-router-dom";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

const Header: React.FC = (props) => {
  return (
    <>
      <HeaderStyled>
        <Switch>
          <Route path="/home" exact>
            <HeaderDesktop home={false} />
            <HeaderMobile />
          </Route>
          <Route path="/new-bet" exact>
            <HeaderDesktop home={true} />
            <HeaderMobile />
          </Route>
        </Switch>
      </HeaderStyled>
      <Space />
    </>
  );
};

export default Header;
