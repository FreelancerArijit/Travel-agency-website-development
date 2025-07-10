import React from 'react'
import { NavLink } from 'react-router-dom'
import TogglerButton from './TogglerButton'

function Header() {
  return (
   <>
   <header>
    <div className="header-contact">
      <img src="./images/call.png" alt="" className="src" />
      <a href="tel:+91 7865095895"> <span> Call us on: </span> 7865095895</a> 
      
    </div>
    <div className="header-main">
      <div className="header-logo">
        <img src="./images/main-logo.png" alt="" className="src" />
      <h1>Travelopia</h1>
      </div>
      <div className="header-menu">
        <ul>
        <NavLink className={"navlink"} to="/" > <li>Home</li> </NavLink>
        <NavLink className={"navlink"} to ="/tour"> <li>Tour</li> </NavLink>
        <NavLink className={"navlink"} to="/contact"> <li>Contact</li> </NavLink> 
         <li><NavLink to="/tour"><TogglerButton text="Book us now" /> </NavLink></li>      
        </ul>

      </div>
    </div>
   </header>
   
   </>
  )
}

export default Header
