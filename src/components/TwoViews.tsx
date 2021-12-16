import styled from 'styled-components'

const Div=styled.div<{isHeader:boolean}>`
    display:flex;
    height: ${ (props)=> (!props.isHeader ? 'calc(100vh - 70px);' : 'calc(100vh - 140px);' )}
    &>div{
        width:50%;        
    }
`
const TwoViews:React.FC<{header:boolean}>=(props)=>{
   
    return <Div isHeader={props.header}>
            {props.children}
           </Div>
}

export default TwoViews