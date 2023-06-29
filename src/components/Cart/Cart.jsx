import "./Cart.css";
import React, { useContext } from 'react'
import { MdClose } from "react-icons/md"
import { BsCartX } from "react-icons/bs"
import CartItem from "./CartItem/CartItem"
import { Context } from "../../utils/context";
export default function Cart({ setShowCart }) {
    const {cartItems,cartSubtotal} = useContext(Context);
  return (
    <div className="main-cart">
        <div className="opac-layer"></div>
        <div className="cart-content">
            <div className="cart-header">
                <span className="heading">Shopping Cart</span>
                <span className="close-btn" onClick={()=> setShowCart(false)}>
                    <MdClose/>
                    <span className="text">Close</span>
                </span>
            </div>
            {!cartItems.length && <div className="empty-cart">
                <BsCartX/>
                <span>No Products bhay</span>
                <button className="return-cta">RETURN TO SHOP</button>
            </div>}
            {!!cartItems?.length && <>
            <CartItem/>
            <div className="cart-footer">
                <div className="subtotal">
                    <span className="text">Subtotal:</span>
                    <span className="total">&#8377;{cartSubtotal}</span>
                </div>
                <div className="checkout-btn">
                    <button className="checkout-cta">Checkout</button>
                </div>
            </div>
            </>}
        </div>
    </div>
  )
}
