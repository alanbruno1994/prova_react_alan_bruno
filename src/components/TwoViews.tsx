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
        width: 80%;
        .header-top-recent-games{
            display: flex;

            .title-recent{
                  font-size: 24px;
                  text-transform: uppercase;
                  color: #707070;
                  font-weight: bold;
                  font-style: italic;
                  margin-right: 60px;
            }
            
            .filter-div{
             display:flex;
             justify-content: center;
             align-items: center;
             

                .filter{
                        font-size: 17px;
                        color: #868686;
                        font-style: italic;
                        font-weight: 100;
                }
             
                button
                {
                    margin:0px 15px;
                }

            }

            
         }  
         
         

         
    }

    .rightDiv{
        width: 20%;


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