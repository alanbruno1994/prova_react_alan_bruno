import styled from "styled-components"

const Button=styled.button`
    background: #F7F7F7;
    font-size: 16px;
    color: #27C383;    
    box-sizing: 1px;
    border-color: #27C383;
    border-radius: 10px;
    height: 52px;
    
    .content
    {
        margin: 0px 20px;

        .separate{
            margin-left: 12px;
        }
    }

        
   

`

const RectangleButton:React.FC=(props)=>
{
    return <Button><span className="content">{props.children}</span></Button>
}

export default RectangleButton