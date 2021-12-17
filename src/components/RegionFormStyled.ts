import styled from "styled-components"

const DIVFather=styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    &>span, &>a
    {
       
        font-size: 35px;
        font-style: italic;
        font-weight: bold;
        color: #707070;
    }

    &>a{
        text-decoration: none;
    }


`

const Form=styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;

    & input{
        font-size: 17px;
        font: italic normal bold 17px Helvetica Neue;
        color: #9D9D9D;
        padding: 30px;
        border: 0px;
    }

    & input:hover, & input:active
    {
        border:0px
    }

    &>div
    {
        height: 2px;
        background:#EBEBEB;
    }

    &>a{
        color: #C1C1C1;
        font-style: normal;
        text-decoration:none;
        display: flex;
        justify-content: end;
        margin-right: 30px;
        margin-top: 20px;
        font-style: italic;
        font-weight: 400;
    }
`

const ButtonLogin=styled.button`
    color: #B5C401;
    background-color: white;
    border:0;
    font-size: 35px;
    font-weight: bold;
    font-family: Helvetica;
    font-style: italic;   
    cursor: pointer;
    display: block;
    margin: 40px auto;
    
`

export { ButtonLogin,DIVFather, Form}