import styled from "styled-components"

const HeaderStyled=styled.header`
    height: 70px;
    display: flex;
`

const Header:React.FC=(props)=>
{
    return <HeaderStyled>
        {props.children}
    </HeaderStyled>
}

export default Header