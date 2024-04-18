import React, { useState } from 'react'
import './index.css'
import { assets } from '../../assets/assets';
export default function LoginPopUp({setLogIn}) {
    const [currentState,setCurrentState] =useState("Login");
  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currentState}</h2>
          <img onClick={()=>{setLogIn(false)}} src={assets.cross_icon} alt=''/>
        </div>
        <div className='login-popup-inputs'>
            {currentState==="Login" ? <></> :  <input type='text' placeholder='Your name' required/> }
            <input type='text' placeholder='Your email' required/>
            <input type='text' placeholder='Password' required/>
        </div>
        <button>{currentState==="Sign Up" ? "Create account" : "Login"}</button>
        <div className='login-popup-condition'>
            <input type='checkbox' required/>
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === "Login" ? 
            <p>Create new account? <span onClick={()=>{setCurrentState("Sign Up")}}>Click here</span></p>
            :
            <p>Already have an account? <span onClick={()=>{setCurrentState("Login")}}>Login here</span></p>
        }
      </form>
    </div>
  )
}
