import React, { useContext, useState } from 'react'
import {assets} from '../../assets/assets'
import './index.css';
import { Link } from 'react-router-dom';
import { Storecontext } from '../../context/Storecontext';

export default function Navbar({setLogIn}) {
    const [menu,setMenu]=useState("home");
    const {getTotalCartAmount} = useContext(Storecontext);
  return (
    <div className='navbar'>
        <Link to="/">
            <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Zomato_Logo.svg" alt='zomato'/>
        </Link>
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>setMenu("home")} className={menu=="home"?"active":""}>home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu=="menu"?"active":""}>menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu=="mobile-app"?"active":""}>mobile-app</a>
            <a href='#footer' onClick={()=>setMenu("contact us")} className={menu=="contact us"?"active":""}>contact us</a>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt='search-icon'/>
            <div className='navbar-search-icon'>
                <Link to="/cart">
                  <img src={assets.basket_icon} alt='basket-icon'/>
                </Link>
                <div className={getTotalCartAmount() === 0 ? "": "dot"}></div>
            </div>
            <button onClick={()=>setLogIn(true)}>sign in</button>
        </div>
    </div>
  )
}
