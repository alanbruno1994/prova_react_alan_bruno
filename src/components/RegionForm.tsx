import { NavLink } from "react-router-dom"
import Card from "./UI/Card"
import { BsArrowRight } from "react-icons/bs";
import { ButtonLogin, DIVFather, Form } from "./RegionFormStyled";

const RegionLogin: React.FC=(props)=>{
    return <DIVFather>
                <span>Authentication</span>
                <Card>
                    <Form>
                        <input type="text" placeholder="Email"></input>
                        <div className="spacing"/>
                        <input type="password" placeholder="Password"></input>
                        <div className="spacing"/>
                        <NavLink to="/reset-password"><span>I forget my password</span></NavLink>
                        <ButtonLogin>Log in <BsArrowRight size={24}/></ButtonLogin>
                    </Form>
                </Card>
                <NavLink to="/register-user">Sign Up <BsArrowRight size={24}/></NavLink>
            </DIVFather>
}

export default RegionLogin