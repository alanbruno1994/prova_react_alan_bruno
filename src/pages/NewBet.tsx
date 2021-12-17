import ButtonGame from "@components/ButtonGame";
import Cart from "@components/Cart";
import CicleButton from "@components/CircleButton";
import Footer from "@components/footer";
import Header from "@components/Header";
import RectangleButton from "@components/RectangleButton";
import TwoViews from "@components/TwoViews";
import { headerBase, urlBase } from "@src/constants/api_constants";
import useLogout from "@src/hooks/logout";
import Game from "@src/types/game.type";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";


const NewBet=()=>{
    const logoutHandler = useLogout()
    const [games,setGames]= useState<Game[]>([])
    const [chooseGame,setChooseGame]=useState(0)
    const [ball,setBall]=useState(0)
        
    const serveData= async ()=>
    {
        const response = await axios.get(urlBase+'cart_games',{headers:headerBase}) 
        const data= await response.data
        setGames(data.types)
        setChooseGame(data.types[0].id)
        setBall(data.types[0].range)
    }

    const chooseGameHandler=(choose:number,index:number)=>
    {
        setChooseGame(choose)
        console.log(ball)
        setBall(games[index].range)
    }

    const generateBalls=()=>{
        const vet:JSX.Element[]=[]
        for(let i=1;i<=ball;i++)
        {
            vet.push(<CicleButton key={i} number={i<=9 ? '0'+i : ''+i}/>)
        }     
        return vet;
    }

    useEffect(()=>{
     serveData()
    },[])

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
                                {games.map((game:Game,index)=>{                                  
                                    if(game.id===chooseGame)
                                    {
                                        return <ButtonGame index={index} id={game.id} chooseHandler={chooseGameHandler} key={game.id} text={game.type} backGround={game.color} colorText="white"/>
                                    }                                  
                                   return  <ButtonGame  index={index} id={game.id} chooseHandler={chooseGameHandler} key={game.id} text={game.type} backGround="white" colorText={game.color}/>
                                })}              
                            </div>
                            <div className="subtitle">Fill your bet</div>
                            <div> Mark as many numbers as you want up to a maximum of 50. Win by hitting 15, 16, 17, 18, 19, 20 or none of the 20 numbers drawn.</div>
                            <div className="number-chooses">
                            {generateBalls()}                         
                            </div>
                            <div>
                                <RectangleButton>Complete game</RectangleButton>
                                <RectangleButton>Clear game</RectangleButton>
                                <RectangleButton><BsCart3 size={16} color="red"/><span className="separate">Add to cart</span></RectangleButton>
                            </div>
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