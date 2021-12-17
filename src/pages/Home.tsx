import ButtonGame from "@components/ButtonGame";
import Footer from "@components/footer";
import Header from "@components/Header";
import MyGamesRecents from "@components/MyGamesRecents";
import TwoViews from "@components/TwoViews";
import { BsArrowRight } from "react-icons/bs";
import { NavLink,  } from "react-router-dom";
import useLogout from "@src/hooks/logout";

const Home=()=>
{
   
    const logoutHandler = useLogout()
  
    return <>
        <Header>
            <div className="TGLHome">TGL<div/></div>
            <div className="TwoElements"><span><span>Account</span></span><button onClick={logoutHandler}>Log out &nbsp; <BsArrowRight size={24}/></button></div>
        </Header>
        <TwoViews header={true} home={true}>
            <div className="leftDiv">
                <div className="header-top-recent-games">
                    <span className="title-recent">Recent Games</span>
                    <div className="filter-div">
                        <span className="filter">Filters</span>
                        <ButtonGame text="Mega Sena" backGround="green" colorText="white"/>
                        <ButtonGame text="Lotofacil" backGround="pink" colorText="white"/>
                        <ButtonGame text="Lotomania" backGround="cyan" colorText="white"/>
                    </div>
                </div>  
                <MyGamesRecents numbers="01, 02,04,05,06,07,09,15,17,20,21,22,23,24,25"
                priceDate="30/11/2020 - (R$ 2,50)"
                typeGame="Lotofácil"
                typeColor="#7F3992"/>   
                <MyGamesRecents numbers="01, 02,04,05,06,07,09,15,17,20,21,22,23,24,25"
                priceDate="30/11/2020 - (R$ 2,50)"
                typeGame="Lotofácil"
                typeColor="#7F3992"/> 
                <MyGamesRecents numbers="01, 02,04,05,06,07,09,15,17,20,21,22,23,24,25"
                priceDate="30/11/2020 - (R$ 2,50)"
                typeGame="Lotofácil"
                typeColor="#7F3992"/>                  
            </div>
            <div className="rightDiv"><div className="DivContentNewBet"><NavLink to="/new-bet" className="NewBet">New Bet <BsArrowRight size={24}/></NavLink></div></div>
        </TwoViews>
        <Footer content="Copyright 2021 Luby Software"/>    
    </>
}

export default Home;