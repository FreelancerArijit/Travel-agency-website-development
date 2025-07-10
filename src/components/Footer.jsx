import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer>
        <div className="foooter-top">
          <div className="footer-top-left">
            <img src="./images/main-logo.png" alt="" className="src" />
            <h1>Travelopia</h1>
          </div>

          <div className="footer-top-mid">
            <label htmlFor="follow us"> Follow us on: </label>
            <img src="./images/mail.png" alt="" className="icon" />
            <img src="./images/twitter.png" alt="" className="icon" />
            <img src="./images/facebook.png" alt="" className="icon" />
            </div>

          <div className="footer-top-right">
            <ul>
              <NavLink className={"navlink"} to="/" > <li>Home</li> </NavLink>
              <NavLink className={"navlink"} to="/tour"> <li>Tour</li> </NavLink>
              <NavLink className={"navlink"} to="/contact"> <li>Contact</li> </NavLink>

            </ul>
          </div>



        </div>

      </footer>

      <div className="footer-copyright">
        <p>@2025 copyright travelopia.com</p>

      </div>

    </>
  )
}

export default Footer
