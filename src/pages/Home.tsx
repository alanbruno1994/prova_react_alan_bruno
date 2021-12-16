import Footer from "@components/footer";
import Header from "@components/Header";
import TwoViews from "@components/TwoViews";
import { BsArrowRight } from "react-icons/bs";
import { useHistory } from "react-router-dom";


const Home=()=>
{
    const navigate=useHistory()
    const exitHandler=()=>{
        navigate.push("/")
    }   

    return <>
        <Header>
            <div className="TGLHome">TGL<div/></div>
            <div className="TwoElements"><span><span>Account</span></span><button onClick={exitHandler}>Log out &nbsp; <BsArrowRight size={24}/></button></div>
        </Header>
        <TwoViews header={true}>
            <div>Recent Games</div>
            <div>New Bet</div>
        </TwoViews>
        <Footer content="Copyright 2021 Luby Software"/>    
    </>
}

export default Home;