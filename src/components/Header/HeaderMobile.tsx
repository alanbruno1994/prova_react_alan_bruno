import MenuMobile from "@components/MenuMobile";
import HeaderModileStyled from "@components/SyledComponents/header/HeaderMobileStyled";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink, Route, Switch } from "react-router-dom";

const HeaderMobile: React.FC = (props) => {
  const [enableMobileMenu, setEnableMobileMenu] = useState(false);

  const mobileHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setEnableMobileMenu(!enableMobileMenu);
  };

  return (
    <HeaderModileStyled>
      {!enableMobileMenu && (
        <div className="mobile">
          <div className="TGLHome">
            TGL
            <div />
          </div>
          <div className="mobile-link">
            <NavLink to="" onClick={mobileHandler}>
              <AiOutlineMenu color="#707070" size={24} />
            </NavLink>
          </div>
        </div>
      )}
      {enableMobileMenu && (
        <Switch>
          <Route path="/home">
            <MenuMobile home={false} mobileHandler={mobileHandler} />
          </Route>
          <Route path="/new-bet">
            <MenuMobile home={true} mobileHandler={mobileHandler} />
          </Route>
        </Switch>
      )}
    </HeaderModileStyled>
  );
};

export default HeaderMobile;
