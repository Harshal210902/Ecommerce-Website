import { useEffect,useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Cart from "../Cart/Cart";
import { Context } from "../../utils/context"


import "./Header.css";
import React from 'react'
export default function Header() {
    const [scroll,setScroll] = useState(false);
    const [showCart,setShowCart] = useState(false);
    const {cartCount} = useContext(Context);
    const navigate = useNavigate();
    function handleScroll()
    {
        const yheight = window.scrollY;
        if(yheight>=200)
        {
            setScroll(true);
        }else{
            setScroll(false);
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", handleScroll)
    },[scroll])
  return (
        <>
            <header className={`main-header ${scroll?"sticky-header":""}`}>
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate("/")} >Home</li>
                        <li onClick={() => navigate("/about")} >About</li>
                        <li onClick={() => navigate("/")} >Categories</li>
                    </ul>
                    <div className="center-logo" onClick={() => navigate("/")}>ECommerce</div>
                    <div className="right">
                        <TbSearch/>
                        <AiOutlineHeart/>
                        <span className="cart-icon" onClick={()=> setShowCart(true)}>
                            <CgShoppingCart/>
                            {!!cartCount && <span>{cartCount}</span>}
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart={setShowCart} />}
        </> 
  )
}
