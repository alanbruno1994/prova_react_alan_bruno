import MenuMobile from "@components/MenuMobile";
import HeaderModileStyled from "@components/SyledComponents/header/HeaderMobileStyled";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

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
      {enableMobileMenu && <MenuMobile mobileHandler={mobileHandler} />}
    </HeaderModileStyled>
  );
};

export default HeaderMobile;
