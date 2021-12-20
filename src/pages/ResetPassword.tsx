import Brand from "@components/Brand";
import TwoViews from "@components/TwoViews";
import RegionForm from "@components/RegionForm";
import { NavLink } from "react-router-dom";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { ButtonLogin } from "@components/SyledComponents/RegionFormStyled";
import Footer from "@components/footer";

const ResetPassoword = () => {
  return (
    <>
      <TwoViews header={false}>
        <div>
          <Brand />
        </div>
        <div>
          <RegionForm
            title="Reset Password"
            linkFooter={
              <NavLink to="/">
                {" "}
                <BsArrowLeft size={24} /> Back
              </NavLink>
            }
          >
            <input type="email" placeholder="Email"></input>
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
