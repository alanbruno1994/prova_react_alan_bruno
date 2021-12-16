import styled from "styled-components"

const HeaderStyled=styled.header`
    height: 70px;
    width: 85%;
    margin: 0 auto;
 

    &>div{        
        display: flex;
        width: 100%;
        justify-content: space-between;
    }


    .TGLHome{
        font-size: 44px;
        color: #707070;
        font-weight: bolder;
        font-style: italic;
        display: flex;
        flex-direction: column;       
        width: 107px;
        text-align:center;
        margin-top: 10px;

        div{
            width: 107px;
            height: 7px;
            position: absolute;
            top:68px;
            background-color: #B5C401;
        }
    }

    .TwoElements{        
        display: flex;
        margin-top: 10px;
     
        span,button{
            background-color:white;
            color: #707070;
            font-size: 20px;
            font-weight:500;
            font-style: italic;
            display: flex;
            align-items:center;
        }

        &>span{
            margin-right: 40px;
        }

        button{
            border:0px;
        }
    }
`

const Space=styled.div`
        height: 2px;
        width: 100%;       
        background-color:#EBEBEB;       
`

export {HeaderStyled,Space}