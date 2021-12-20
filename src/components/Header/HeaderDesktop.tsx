import HeaderDesktopStyled from "@components/SyledComponents/header/HeaderDesktopStyled";
import useLogout from "@src/hooks/logout";
import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const HeaderDesktop: React.FC<{ home: boolean }> = (props) => {
  const logoutHandler = useLogout();

  function logout(event: React.MouseEvent) {
    event.preventDefault();
    logoutHandler();
  }

  return (
    <HeaderDesktopStyled>
      <div className="desktop">
        {!props.home && (
          <div className="TGLHome">
            TGL
            <div />
          </div>
        )}
        {props.home && (
          <div className="tgl_links">
            <div className="TGLHome">
              TGL
              <div />
            </div>
            <div className="home">
              <NavLink to="/home">Home</NavLink>
            </div>
          </div>
        )}
        <div className="TwoElements">
          <span>
            <span>Account</span>
          </span>
          <NavLink to="" onClick={logout}>
            Log out &nbsp; <BsArrowRight size={24} />
          </NavLink>
        </div>
      </div>
    </HeaderDesktopStyled>
  );
};
export default HeaderDesktop;
