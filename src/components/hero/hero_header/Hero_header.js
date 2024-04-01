import React from 'react'
import "./Hero_header.css"
import close from "../../images/navbar/Vector.png"
import { LiaTelegram } from "react-icons/lia";

function Hero_header() {
    return (
        <div className='container hero'>
            <div className='hero__left'>
                <div className='hero__left__oginal'>
                    <label >100%</label>
                    <p> Organic Vegetables</p>
                </div>
                <h1>The best way to stuff your wallet.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.</p>
                <div className='hero__left__input'>
                    <LiaTelegram className='img__tg' />
                    <input type="text" placeholder='Your emaill address' name="" id="" />
                    <button className='input__btn'>Subscribe</button>
                </div>
            </div>

            <div className='hero_reight'>
                <a href="#"><img src={close} alt="" />Shopping</a>
                <a href="#"><img src={close} alt="" />Recips</a>
                <a href="#"><img src={close} alt="" />Kitchen</a>
                <a href="#"><img src={close} alt="" />News</a>
                <a href="#"><img src={close} alt="" />Food</a>
            </div>
        </div>
    )
}

export default Hero_header