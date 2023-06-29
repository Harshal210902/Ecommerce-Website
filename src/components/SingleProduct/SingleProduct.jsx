import "./SingleProduct.css";
import React from 'react'
import { FaCartPlus, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest } from "react-icons/fa"
import useFetch from "../../hooks/useFetch" 
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../../utils/context";

export default function SingleProduct() {
    const { id } = useParams();
    const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
    const [quantity,setQuantity] = useState(1);
    const {handleAddToCart} = useContext(Context);
    function decrement()
    {
        let count = quantity;
        if(count>1) count--;
        setQuantity(count);
    }
    function increment()
    {
        let count = quantity;
        count++;
        setQuantity(count);
    }

    if(!data) return;
    const product = data?.data?.[0]?.attributes;
  return (
    <div className="main-single-product">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    <img src={process.env.REACT_APP_DEV_URL + product.img.data[0].attributes.url} alt="" />
                </div>
                <div className="right">
                    <span className="name">{product.title}</span>
                    <span className="price">&#8377;{product.price}</span>
                    <span className="description">{product.desc}</span>
                    <div className="cart-buttons">
                        <div className="quantity-buttons">
                            <span onClick={decrement}>-</span>
                            <span>{quantity}</span>
                            <span onClick={increment}>+</span>
                        </div>
                        <button className="add-to-cart" onClick={() => {
                            handleAddToCart(data.data[0], quantity)
                            setQuantity(1);
                        }}>
                            <FaCartPlus size={20}/>
                            Add to Cart
                        </button>
                    </div>
                    <span className="divider"/>
                    <div className="info-item">
                        <span className="text-heading">Category:
                            <span>{product.categories.data[0].attributes.title}</span>
                        </span>
                        <span className="text-heading">Share:
                            <span className="social-icons">
                                <FaFacebookF size={16} />
                                <FaTwitter size={16} />
                                <FaInstagram size={16} />
                                <FaLinkedinIn size={16} />
                                <FaPinterest size={16} />
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
