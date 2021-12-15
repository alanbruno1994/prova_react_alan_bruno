import style from 'styled-components'

const Div=style.div`
    display:flex;
    
    div{
        width:50%;        
    }
`
const TwoViews:React.FC=(props)=>{
   
    return <Div>
            {props.children}
           </Div>
}

export default TwoViews