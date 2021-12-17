import ButtonGame from "@components/ButtonGame";
import Cart from "@components/Cart";
import CicleButton from "@components/CircleButton";
import Footer from "@components/footer";
import Header from "@components/Header";
import TwoViews from "@components/TwoViews";
import useLogout from "@src/hooks/logout";
import { BsArrowRight } from "react-icons/bs";



const NewBet=()=>{
    const logoutHandler = useLogout()

    return <>
            <Header>
                <div className="TGLHome">TGL<div/></div>
                <div className="TwoElements"><span><span>Account</span></span><button onClick={logoutHandler}>Log out &nbsp; <BsArrowRight size={24}/></button></div>
            </Header>
            <TwoViews header={true}>
                <div className="leftDiv">
                    <div className="region-game">
                            <div className="titles"><span className="title-bold">New bet</span> <span className="title">for mega-sena</span></div>
                            <div className="subtitle">Choose a game</div>
                            <div className="game-change">
                                <ButtonGame text="Mega Sena" backGround="green" colorText="white"/>
                                <ButtonGame text="Lotofacil" backGround="pink" colorText="white"/>
                                <ButtonGame text="Lotomania" backGround="cyan" colorText="white"/>
                            </div>
                            <div className="subtitle">Fill your bet</div>
                            <div> Mark as many numbers as you want up to a maximum of 50. Win by hitting 15, 16, 17, 18, 19, 20 or none of the 20 numbers drawn.</div>
                            <div className="number-chooses"><CicleButton number="01"/></div>
                            <div></div>
                    </div>
                  
                </div>
                <div className="rightDiv" >
                    <Cart/>
                </div>
            </TwoViews>
            <Footer content="Copyright 2021 Luby Software"/> 
          </> 
} 

export default NewBet