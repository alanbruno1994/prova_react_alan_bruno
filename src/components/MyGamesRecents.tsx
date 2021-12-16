import styled from "styled-components"


const Content=styled.div<{typeColor:string}>`
display: flex;
margin-top: 20px;

.infos-recent-games{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
   

    .numbers{
        font-size: 20px;
        color: #868686;
        font-style: italic;
    }

    .price-date{
        font-size: 17px;
        color: #868686;
    }

    .type-game{
        font-size: 20px;
        color: ${props=>props.typeColor};
        font-style: italic;
        font-weight: bold;
    }
    
 }

 .bar{
        width: 6px;
        background: ${props=>props.typeColor};
        height: 94px;
        border-radius: 100px;
 }


`
const MyGamesRecents:React.FC<{numbers:string,priceDate:string,typeGame:string,typeColor:string}>=(props)=>{
 


    return <Content typeColor={props.typeColor}>
                <div className="bar"></div>
                <div className="infos-recent-games">
                    <span className="numbers">{props.numbers}</span>
                    <span className="price-date">{props.priceDate}</span>
                    <span className="type-game">{props.typeGame}</span>
                </div>
            </Content>
}

export default MyGamesRecents