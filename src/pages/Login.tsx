import Brand from "@components/Brand"
import RegionForm from "@components/RegionForm"
import { ButtonLogin } from "@components/RegionFormStyled"
import TwoViews from "@components/TwoViews"
import { BsArrowRight } from "react-icons/bs"
import { NavLink } from "react-router-dom"


const Login=()=>{

    return <>
    <TwoViews>
            <div><Brand/></div>
            <div><RegionForm linkFooter={<NavLink to="/register">Sign Up <BsArrowRight size={24}/></NavLink>}>
                        <input type="text" placeholder="Email"></input>
                        <div className="spacing"/>
                        <input type="password" placeholder="Password"></input>
                        <div className="spacing"/>
                        <NavLink to="/reset-password"><span>I forget my password</span></NavLink>
                        <ButtonLogin>Log in <BsArrowRight size={24}/></ButtonLogin>                
                </RegionForm>
            </div>        
    </TwoViews>
    </>
}

export default Login