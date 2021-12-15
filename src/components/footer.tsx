import styled from "styled-components"

const FooterBody=styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    &>div
    {
        width: 100%;
        height: 2px;
        background-color: #EBEBEB;
    }
`

const Footer:React.FC<{content:string}>=(props)=>{

    return <FooterBody><div/>{props.content}</FooterBody>
}

export default Footer