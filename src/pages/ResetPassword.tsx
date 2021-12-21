import Brand from "@components/Brand";
import TwoViews from "@components/TwoViews";
import RegionForm from "@components/Region/RegionForm";
import { NavLink } from "react-router-dom";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Footer from "@components/footer";
import { ButtonLogin } from "@components/SyledComponents/RegionFormStyled";
import EmptyValidation from "@src/common/empty_validation";
import mensagesFailure from "@src/common/messages_failure";
import useFailure from "@src/hooks/failure";
import { useState } from "react";
import ErrorPortal from "@src/portals/ErrorPortal";
import { headerBase, urlBase } from "@src/constants/api_constants";
import axios from "axios";
import CardAnimation from "@src/animation/CardMsgAnimation";
import EmailValidation from "@src/common/email_validation";

const ResetPassoword = () => {
  const { failure, openFailure, closeFailure } = useFailure();
  const [email, setEmail] = useState("");

  async function resetHandler(event: React.FormEvent) {
    event.preventDefault();
    try {
      new EmptyValidation([{ name: "email", value: email }]).validate();
      new EmailValidation(email).validate();
      await axios.post(urlBase + "reset", { email }, { headers: headerBase });
    } catch (error: any) {
      mensagesFailure(error, openFailure);
    }
  }

  return (
    <>
      <ErrorPortal>
        <CardAnimation
          enable={failure.enable}
          menssage={failure.message}
          closeEnable={closeFailure}
        ></CardAnimation>
      </ErrorPortal>
      <TwoViews header={false}>
        <div>
          <Brand />
        </div>
        <div>
          <RegionForm
            title="Reset Password"
            action={resetHandler}
            linkFooter={
              <NavLink to="/">
                {" "}
                <BsArrowLeft size={24} /> Back
              </NavLink>
            }
          >
            <input
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Email"
            ></input>
            <div className="spacing" />
            <ButtonLogin>
              Send Link <BsArrowRight size={24} />
            </ButtonLogin>
          </RegionForm>
        </div>
      </TwoViews>
      <Footer content="Copyright 2021 Luby Software" />
    </>
  );
};
export default ResetPassoword;
