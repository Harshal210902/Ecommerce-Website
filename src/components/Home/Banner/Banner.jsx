import "./Banner.css";
import React from 'react'
import Bannerpic from "../../../assets/banner14.png"

export default function Banner() {
  return (
    <div className="main-banner">
        <div className="content">
            <div className="text-content">
                <h1>iPhone 14 Pro</h1>
                <h1>Pro. Beyond</h1>
                <p>15.54 cm (6.1-inch) Super Retina XDR display featuring Always-On and ProMotion
                    Dynamic Island, a magical new way to interact with iPhone
                    48MP Main camera for up to 4x greater resolution
                    Cinematic mode now in 4K Dolby Vision up to 30 fps</p>
                <div className="ctas">
                    <button className="cta" >Read More</button>
                    <button className="cta" >Shop Now</button>
                </div>
            </div>
            <img  className="banner-img" src={Bannerpic} alt="" />
        </div>
    </div>
  )
}
