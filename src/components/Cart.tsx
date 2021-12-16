import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";
import BoxCart from "./BoxCart";

const Content=styled.div `
    display: flex;
    flex-direction: column;
    background: white;
    margin-top: 40px;
    border-radius: 10px;
    width: 317px;

    .cart-title{
        color: #707070;
        text-transform: uppercase;
        font-style: italic;
        font-size: 24px;
        margin: 32px 0px;
        margin-left: 19px;
    }

    .save{
        height: 96px;
        border-bottom-right-radius:10px;
        border-bottom-left-radius:10px;
        background: #F4F4F4;
        border: 1px solid #E2E2E2;     
        display: flex;
        justify-content:center;
        align-items: center;

        span{
            color: #27C383;
            font-size: 35px;
            font-style: italic;
        }
    }

    .price-total{
        margin: 32px 0px;
    }



`

const Cart:React.FC=(props)=>{    
    return <Content>
            <span className="cart-title">Cart</span>
            <div>
                <BoxCart/>
                <BoxCart/>
                <BoxCart/>
            </div>
            <div className="price-total">
                <span className="cart-title">Cart</span> <span>Total</span> <span>R$ 30,00</span>
            </div>
            <div className="save">
                <span>Save <BsArrowRight size={32}/></span>

            </div>
    </Content>
}

export default Cart;