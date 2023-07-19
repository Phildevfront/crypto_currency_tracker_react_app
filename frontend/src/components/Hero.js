import React from 'react'
import { Link } from 'react-router-dom'
import Crypto from '../assets/hero-img.png'
import Trade  from '../assets/trade.png'
import './Hero.css'

const Hero = () => {
  return (
	<div >
		<section className='hero'>
			<div className='container'>
				{/* LEFT SIDE */}
				<div className='left'>
					<p>Easily track exchange rates for your favorite cryptocurrency </p>
					<h1> with our Crypto Currency Tracker</h1>
					<p>The fastest way to buy, sell and trade hundreds of crypto</p>
					<div className='input-container'>
						<Link to="/login" className='btn'>Sign in</Link>
					</div>
				</div>

				{/* RIGHT SIDE */}
				<div className='rigth'>
					<div className='img-container'>
						<img src={Crypto} alt=''/>
					</div>
				</div>
			</div>
		</section>
		<section className='signup'>
			<div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={Trade} alt='' />
                </div>
                {/* right */}
                <div className='right'>
                    <h2>Earn passive income with crypto.</h2>
                    <p>Earn up to 12% annual rewards on 30+ digital assets. Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits.</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn'>Learn More</button>
                    </div>
                </div>
            </div>
		</section>
	</div>
  )
}

export default Hero