import Brand from "@components/Brand";
import TwoViews from "@components/TwoViews";
import RegionForm from "@components/RegionForm";
import { NavLink } from "react-router-dom";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Footer from "@components/footer";
import { ButtonLogin } from "@components/SyledComponents/RegionFormStyled";
import EmptyValidation from "@src/common/empty_validation";
import mensagesFailure from "@src/common/messages_failure";
import useFailure from "@src/hooks/failure";
import { useState } from "react";
import Error from "@components/UI/Error";
import ErrorPortal from "@src/portals/ErrorPortal";

const ResetPassoword = () => {
  const { failure, openFailure, closeFailure } = useFailure();
  const [email, setEmail] = useState("");

  async function resetHandler(event: React.FormEvent) {
    event.preventDefault();
    try {
      new EmptyValidation([{ name: "email", value: email }]).validate();
    } catch (error: any) {
      mensagesFailure(error, openFailure);
    }
  }

  return (
    <>
      <ErrorPortal>
        {failure.enable && (
          <Error menssage={failure.message} close={closeFailure} />
        )}
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
