import Brand from "@components/Brand"
import TwoViews from "@components/TwoViews"
import RegionForm from "@components/RegionForm"
import { ButtonLogin } from "@components/RegionFormStyled"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { NavLink,useHistory } from "react-router-dom"
import Footer from "@components/footer"
import React, { useState } from "react"
import axios from "axios"
import { urlBase,headerBase } from "@src/constants/api_constants"
import {useDispatch} from 'react-redux'
import { loginActions } from "@src/store/login"


const RegisterUser=()=>{
    const navigate=useHistory()
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const dispatch=useDispatch();

    async function registerHandler(event: React.FormEvent)
    {
        event.preventDefault();
        const response = await axios.post(urlBase+'user/create',{email,name,password},{headers:headerBase})
        const data = await response.data
        const token= data.token.token;
        const expireAtToken=data.token.expires_at;        
        const user_id=data.user.id;        
        const logged=true;
        dispatch(loginActions.setLogin({token,expireAtToken,user_id,name:data.user.name,logged,email:data.user.email}))
        navigate.push("/home")        
    }


    return <>
            <TwoViews header={false}>
                    <div><Brand/></div>
                    <div><RegionForm action={registerHandler} title="Registration" linkFooter={<NavLink to="/"> <BsArrowLeft size={24}/> Back</NavLink>}>
                                <input onChange={event=>setName(event.target.value)} type="text" placeholder="Name"></input>
                                <div className="spacing"/>      
                                <input onChange={event=>setEmail(event.target.value)} type="email" placeholder="Email"></input>
                                <div className="spacing"/>      
                                <input onChange={event=>setPassword(event.target.value)}  type="password" placeholder="Password"></input>
                                <div className="spacing"/>                       
                                <ButtonLogin>Register <BsArrowRight size={24}/></ButtonLogin>                
                        </RegionForm>    
                    </div>        
            </TwoViews>
            <Footer content="Copyright 2021 Luby Software"/>
     </>
}

export default RegisterUser