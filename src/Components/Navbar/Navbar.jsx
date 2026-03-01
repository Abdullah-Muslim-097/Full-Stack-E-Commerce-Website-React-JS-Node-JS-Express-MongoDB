import React from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className="Nav-logo">
            <img src={logo} alt="" />
            <p>ShopEasy</p>
        </div>
        <ul className="Nav-menu">
            <li>Shop <hr/></li> 
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
        </ul>
        <div className='Nav-login-cart'>
            <button>Login</button>
            <img src={cart_icon} alt="" />
            <div className="nav-cart-count"></div>
        </div>
        
      
    </div>
  )
}

export default Navbar
