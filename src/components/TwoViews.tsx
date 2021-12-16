import styled from 'styled-components'

const Div=styled.div<{isHeader:boolean,home?:boolean}>`
    display:flex;
    width: 85%;
    margin: 0 auto;
    padding-top: ${props=> props.home ? '70px' : '0px'};
    height: ${ (props)=> (!props.isHeader ? 'calc(100vh - 70px)' : 'calc(100vh - 142px)' )};    
    
    &>div{
        width:50%;        
    }
    
    .leftDiv{
        width: 60%;
    }

    .rightDiv{
        width: 40%;


    }
    .DivContentNewBet{
    display: flex;
    justify-content: flex-end;

    .NewBet{
        font-size: 24px;
        text-decoration:none;
        color: #B5C401;
        font-weight: bold;
        font-style: italic;
        text-align:right;
    }
}



`
const TwoViews:React.FC<{header:boolean,home?:boolean}>=(props)=>{
   
    return <Div isHeader={props.header} home={props.home}>
            {props.children}
           </Div>
}

export default TwoViews