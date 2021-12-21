import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import BlackBackgound from "@components/SyledComponents/BlackBackground";
import useLogout from "@src/hooks/logout";
import Content from "./SyledComponents/MenuMobileStyled";

const MenuMobile: React.FC<{
  mobileHandler: (event: React.MouseEvent) => void;
  home: boolean;
}> = (props) => {
  const logoutHandler = useLogout();
  return (
    <Content>
      <BlackBackgound intensity={0.6} />
      <div className="menu">
        <div className="header">
          <div className="TGLHome">
            {" "}
            TGL
            <div />
          </div>
          <div className="mobile-link">
            <NavLink to="" onClick={props.mobileHandler}>
              <AiOutlineClose color="#707070" size={24} />
            </NavLink>
          </div>
        </div>
        <div className="body">
          <NavLink to={props.home ? "/home" : "/new-bet"}>
            {props.home ? "Home" : "New Bet"}
          </NavLink>
          <NavLink to="" onClick={(event) => event.preventDefault()}>
            Account
          </NavLink>
          <NavLink to="/" onClick={logoutHandler}>
            Logout
          </NavLink>
        </div>
      </div>
    </Content>
  );
};

export default MenuMobile;
