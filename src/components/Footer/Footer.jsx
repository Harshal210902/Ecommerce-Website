import "./Footer.css";
import React from 'react'
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa"
import PaymentPic from "../../assets/payments.png"

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam consequuntur ipsa mollitia voluptate aperiam fugit?</div>
            </div>

            <div className="col">
                <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow/>
                    <div className="text">Lorem ipsum.</div>
                </div>
                <div className="c-item">
                    <FaMobileAlt/>
                    <div className="text">Phone: 0455 6755 2733</div>
                </div>
                <div className="c-item">
                    <FaEnvelope/>
                    <div className="text">Lorem ipsum.</div>
                </div>
            </div>

            <div className="col">
                <div className="title">Categories</div>
                    <span className="text">Smartphones</span>
                    <span className="text">Laptops</span>
                    <span className="text">SmartWatches</span>
                    <span className="text">Earphones</span>
            </div>

            <div className="col">
                <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">NewsRoom</span>
                    <span className="text">Shop</span>
                    <span className="text">Cart</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">Copyright © 2023 ECOMMERCE Inc. All rights reserved.</div>
                <img src={PaymentPic} alt=""/>
            </div>
        </div>
    </footer>
  )
}

