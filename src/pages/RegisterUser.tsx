import Brand from "@components/Brand"
import TwoViews from "@components/TwoViews"
import RegionForm from "@components/RegionForm"
import { ButtonLogin } from "@components/RegionFormStyled"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { NavLink } from "react-router-dom"

const RegisterUser=()=>{
    return  <TwoViews>
            <div><Brand/></div>
            <div><RegionForm title="Reset Password" linkFooter={<NavLink to="/"> <BsArrowLeft size={24}/> Back</NavLink>}>
                        <input type="text" placeholder="Name"></input>
                        <div className="spacing"/>      
                        <input type="email" placeholder="Email"></input>
                        <div className="spacing"/>      
                        <input type="password" placeholder="Password"></input>
                        <div className="spacing"/>                       
                        <ButtonLogin>Register <BsArrowRight size={24}/></ButtonLogin>                
                </RegionForm>    
            </div>        
    </TwoViews>
}

export default RegisterUser