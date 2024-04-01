import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/navbar/toggle.png"
import phone from '../images/navbar/Icon.png'
import logo2 from "../images/navbar/Group.png"
import user from "../images/navbar/user.png"
import like from "../images/navbar/like.png"
import krzina from "../images/navbar/Iconkorzina.png"

import "./Navbar.css"



function Navbar() {
    return (
        <>
            <nav className='container'>
                <div className='navbar__top'>
                    <div className='navbar__top__logo'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='navbar__top__links'>
                        <Link className='navbar__link' to={"/"}>Home</Link>
                        <Link className='navbar__link' to={"/"}>Category</Link>
                        <Link className='navbar__link' to={"/"}>Products</Link>
                        <Link className='navbar__link' to={"/"}>Pages</Link>
                        <Link className='navbar__link' to={"/"}>Blog</Link>
                        <Link className='navbar__link' to={"/"}>Elements</Link>
                    </div>
                    <div className='navbar__top__contact'>
                        <img src={phone} alt="" />
                        <a href="+1234567890">+123 ( 456 ) ( 7890 )</a>
                    </div>
                </div>
                <div className="navbar__bottom">
                    <div className='navbar__bottom__logo'>
                        <img src={logo2} alt="" />
                    </div>
                    <div className='navbar__bottom__search'>
                        <input type="text" name="" id="" />
                    </div>
                    <div className='navbar__bottom__users'>
                        <div>
                            <img src={user} alt="" />
                            <p>Account</p>
                        </div>
                        <div>
                            <img src={like} alt="" />
                            <p>Account</p>
                        </div>
                        <div>
                            <img src={krzina} alt="" />
                            <p>Account</p>
                        </div>
                    </div>

                </div>

            </nav>

        </>
    )
}

export default Navbar