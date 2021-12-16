import styled from "styled-components"

const HeaderStyled=styled.header`
    height: 70px;
 

    &>div{        
        display: flex;
        width: 100vw;
        justify-content: space-between;
    }

    &>.spacing{
        height: 2px;
        width: 100%;       
        background-color:#EBEBEB;
    }
    .TGLHome{
        font-size: 44px;
        color: #707070;
        font-weight: bolder;
        font-style: italic;
        display: flex;
        flex-direction: column;
        margin-left: 130px;
        width: 107px;
        text-align:center;

        div{
            width: 107px;
            height: 7px;
            position: absolute;
            top:58px;
            background-color: #B5C401;
        }
    }

    .TwoElements{        
        display: flex;
        margin-right: 130px;

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

const Header:React.FC=(props)=>
{
    return <HeaderStyled>
        <div>
            {props.children}
        </div>
        <div className="spacing"></div>
    </HeaderStyled>
}

export default Header