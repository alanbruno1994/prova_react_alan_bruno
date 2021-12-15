import styled from 'styled-components'

const Div=styled.div`
    display:flex;
    min-height: 100vh;
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