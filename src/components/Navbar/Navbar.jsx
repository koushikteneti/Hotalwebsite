import React, { useState, useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home"); // Set initial state to "home"
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className='navbar'>
      <a href='/'><img src={assets.logo} alt="Company Logo" className="logo" /></a>
      <ul className='navbar-menu'>
        <li>
          <a href='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</a>
        </li>
        <li>
          <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        </li>
        <li>
          <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        </li>
        <li>
          <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
        </li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="Search Icon" className="search-icon" />
        <div className="navbar-basket-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="Basket Icon" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
}

export default Navbar;