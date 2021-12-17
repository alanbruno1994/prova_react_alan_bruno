import styled from "styled-components"

const Button=styled.button`
    width: 65px;
    height: 65px;
    border-radius: 50%;
    border:0px;
    background: #ADC0C4;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin: 8px 5px;
`

const CicleButton:React.FC<{number:string}>=(props)=>{
    return <Button><span>{props.number}</span></Button>    
}


export default CicleButton