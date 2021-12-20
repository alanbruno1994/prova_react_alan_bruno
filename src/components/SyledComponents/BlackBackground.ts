import styled from "styled-components"

const BlackBackgound=styled.div<{intensity:number}>`
    display:flex;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: ${(props)=>props.intensity};
    z-index: 100;        
    top:0;
    left: 0;        
`
export default BlackBackgound