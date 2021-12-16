import styled from 'styled-components'

const Div=styled.div`
    display:flex;
    height: calc(100vh - 70px);
    &>div{
        width:50%;        
    }
`
const TwoViews:React.FC=(props)=>{
   
    return <Div>
            {props.children}
           </Div>
}

export default TwoViews