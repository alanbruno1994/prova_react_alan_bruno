import styled from "styled-components"

const Button=styled.button<{colorText:string,backGround:string}>`
    background: ${props=>props.backGround};
    color:${props=>props.colorText};
    width: 113px;
    height: 34px;
    border-radius: 100px;
    font-style: italic;
    font-size: 14px;
    border-color: ${props=>props.colorText};

`

const ButtonGame:React.FC<{text:string,backGround:string,colorText:string}>=(props)=>
{

    return <Button backGround={props.backGround} colorText={props.colorText}>{props.text}</Button>

}

export default ButtonGame