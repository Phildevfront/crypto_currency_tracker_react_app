import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'
import  Cryptologo from '../assets/coin-img.png'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)


  return (
    <div className='header'>
        <div className='container'>
            <div className='container-logo' >
            <img className='logo-img' src={Cryptologo} alt='' />
            <h3 className='header-logo'> Crypto Currency <span className='red-logo'>Tracker</span></h3>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <NavLink to="hero">
                    <a href="/">Home</a>
                </NavLink>
                <NavLink to="coinsbase">
                    Coin
                </NavLink>
                    <a href="#footer">Contact</a>
                <NavLink to="register">
                    <button className='btn'>Register</button>
                </NavLink>

            </ul>
            <div className='btn-group'>

            </div>
            <div className='nav-mobile' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color: '#fff'}}/>) : (<FaBars size={20} style={{color: '#fff'}}/>)}
            </div>
        </div>
    </div>
  )
}

export default Navbar