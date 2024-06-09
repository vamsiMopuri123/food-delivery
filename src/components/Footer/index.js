import React from 'react'
import './index.css';
import { assets } from '../../assets/assets';
export default function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
              <img style={{width: 140}} src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Zomato_Logo.svg" alt=''/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever. </p>
              <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt=''/>
                <img src={assets.twitter_icon} alt=''/>
                <img src={assets.linkedin_icon} alt=''/>
              </div>
            </div> 
            <div className='footer-content-center'>
              <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
              </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-874-789-7744</li>
                    <li>contact@zomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 @ Zomato.com - All Rights Reserved.</p>
    </div>
  )
}
