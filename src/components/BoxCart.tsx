import styled from "styled-components"
import { VscTrash } from "react-icons/vsc";

const Content=styled.div`
    display: flex;
    margin: 10px 0px;

    .trash{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .spacing{
        border-top-left-radius:5px;
        border-bottom-left-radius:5px;
        background: red;
        width: 4px;
        height: 86px;
        
    }

    .infos{
        margin-left: 10px;
        display: flex;
        flex-direction: column;

        .numbers{
            color: #868686;
            font-size: 15px;
            font-style: italic;
            margin-top: 10px;
        }

        .type-game{
            margin-right: 10px;
            font-size: 16px;
            color: red;
        }

        .price-game{
           font-size: 16px;
        }
    }

`

const BoxCart:React.FC=()=>{

    return <Content>
        <div className="trash"><VscTrash size={24}/></div>
        <div className="spacing"></div>
        <div className="infos">
            <span className="numbers">01, 02,04,05,06,07,09,15,17,20,21, 22,23,24,25</span>
            <span><span className="type-game">Lotofácil</span><span className="price-game">R$ 20,00</span></span>            
        </div>
    </Content>
}

export default BoxCart