import React, { useState } from 'react'
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
            <img className='logo-img' src={Cryptologo} />
            <h3 className='header-logo'> Crypto Currency <span className='red-logo'>Tracker</span></h3>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>Explore</a>
                </li>
                <li>
                    <a href='/'>Earn</a>
                </li>
                <li>
                    <a href='/'>Contact</a>
                </li>
            </ul>
            <div className='btn-group'> 
                <button className='btn'>Register</button>
            </div>
            <div className='nav-mobile' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color: '#fff'}}/>) : (<FaBars size={20} style={{color: '#fff'}}/>)}
            </div>
        </div>
    </div>
  )
}

export default Navbar