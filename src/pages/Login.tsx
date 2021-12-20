import Brand from "@components/Brand";
import Footer from "@components/footer";
import RegionForm from "@components/RegionForm";
import { ButtonLogin } from "@components/SyledComponents/RegionFormStyled";
import TwoViews from "@components/TwoViews";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { urlBase, headerBase } from "@src/constants/api_constants";
import { loginActions } from "@src/store/login";

const Login = () => {
  const navigate = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await axios.post(
      urlBase + "login",
      { email, password },
      { headers: headerBase }
    );
    const data = await response.data;
    const token = data.token.token;
    const expireAtToken = data.token.expires_at;
    const user_id = data.user.id;
    const name = data.user.name;
    const logged = true;
    dispatch(
      loginActions.setLogin({
        token,
        expireAtToken,
        user_id,
        name,
        logged,
        email: data.user.email,
      })
    );
    navigate.push("/home");
  };

  return (
    <>
      <TwoViews header={false}>
        <div>
          <Brand />
        </div>
        <div>
          <RegionForm
            action={loginHandler}
            title="Authentication"
            linkFooter={
              <NavLink to="/register">
                Sign Up <BsArrowRight size={24} />
              </NavLink>
            }
          >
            <input
              type="text"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            ></input>
            <div className="spacing" />
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            ></input>
            <div className="spacing" />
            <NavLink to="/reset-password">
              <span>I forget my password</span>
            </NavLink>
            <ButtonLogin>
              Log in <BsArrowRight size={24} />
            </ButtonLogin>
          </RegionForm>
        </div>
      </TwoViews>
      <Footer content="Copyright 2021 Luby Software" />
    </>
  );
};

export default Login;
