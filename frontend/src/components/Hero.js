import React from 'react'
import Crypto from '../assets/hero-img.png'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='container'>

            {/* LEFT SIDE */}
            <div className='left'>
                <p>Follow exchage rates easily with</p>
                <h1>Crypto Currency Tracker</h1>
                <p>Buy, sell and trade hundreds of crypto</p>
                <div className='input-container'>
                    <button className='btn'>Sign in</button>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className='rigth'>
                <div className='img-container'>
                    <img src={Crypto} alt=''/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero