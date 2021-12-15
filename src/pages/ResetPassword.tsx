import Brand from "@components/Brand"
import TwoViews from "@components/TwoViews"
import RegionForm from "@components/RegionForm"
import { NavLink } from "react-router-dom"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { ButtonLogin } from "@components/RegionFormStyled"

const ResetPassoword=()=>{    
    return  <TwoViews>
            <div><Brand/></div>
            <div><RegionForm title="Reset Password" linkFooter={<NavLink to="/"> <BsArrowLeft size={24}/> Back</NavLink>}>                            
                        <input type="email" placeholder="Email"></input>
                        <div className="spacing"/>                                          
                        <ButtonLogin>Send Link <BsArrowRight size={24}/></ButtonLogin>                
                </RegionForm>    
            </div>        
            </TwoViews>
}
export default ResetPassoword
