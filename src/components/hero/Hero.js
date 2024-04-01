import React from 'react'
import Products from '../products/Products'
import Hero_header from './hero_header/Hero_header'
import Hero_main from './hero_main/Hero_main'
import Confetti from 'react-confetti'

function Hero() {
    return (
        <>
            <div style={{ background: "#E6E6E6" }}>
                <Hero_header />
            </div>
            <Hero_main />
            <Products />
        </>
    )
}

export default Hero