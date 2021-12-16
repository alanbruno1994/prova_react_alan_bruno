import Brand from "@components/Brand"
import Footer from "@components/footer"
import RegionForm from "@components/RegionForm"
import { ButtonLogin } from "@components/RegionFormStyled"
import TwoViews from "@components/TwoViews"
import React from "react"
import { BsArrowRight } from "react-icons/bs"
import { NavLink, useHistory } from "react-router-dom"


const Login=()=>{
    const navigate=useHistory()

    const loginHandler=(event:React.FormEvent)=>
    {
        event.preventDefault()
        navigate.push("/home")        
    }

    return <>
            <TwoViews header={false}>
                    <div><Brand/></div>
                    <div><RegionForm action={loginHandler} title="Authentication" linkFooter={<NavLink to="/register">Sign Up <BsArrowRight size={24}/></NavLink>}>
                                <input type="text" placeholder="Email"></input>
                                <div className="spacing"/>
                                <input type="password" placeholder="Password"></input>
                                <div className="spacing"/>
                                <NavLink to="/reset-password"><span>I forget my password</span></NavLink>
                                <ButtonLogin>Log in <BsArrowRight size={24}/></ButtonLogin>                
                        </RegionForm>
                    </div>        
            </TwoViews>
            <Footer content="Copyright 2021 Luby Software"/>
    </>
}

export default Login