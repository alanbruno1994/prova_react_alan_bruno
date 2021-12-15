import styled from "styled-components"
import Card from "./UI/Card"

const DIVFather=styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    &>span
    {
        font: italic normal bold 35px/70px Helvetica Neue;
        color: #707070;
    }

`

const RegionLogin: React.FC=(props)=>{

    return <DIVFather>
                <span>Authentication</span>
                <Card></Card>
            </DIVFather>
}

export default RegionLogin