// import React from 'react'

import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiVipDiamondFill } from "react-icons/ri";
import "./NavBar.css";
import Logo from "../../../public/assets/logo.png";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={Logo} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
      <li className="p__opensans">
          <a href="aboutus">About us</a>
        </li>
        <li className="p__opensans">
          <a href="team">Team</a>
        </li>
        <li className="p__opensans">
          <a href="#gulfnews">UAE News</a>
        </li>
        <li className="p__opensans">
          <a href="#superseries">100 Pioneers List</a>
        </li>
        <li className="p__opensans">
          <a href="#faqs">FAQS</a>
        </li>
        <li className="p__opensans">
          <a href="#gallery">Gallery</a>
        </li>
        
       
      
        <li className="p__opensans">
          <a href="#support">Support</a>
        </li>
      </ul>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#b5964d"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <RiVipDiamondFill
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
            <li>
                <a href="aboutus" onClick={() => setToggleMenu(false)}>
                  About us
                </a>
              </li>
              <li>
                <a href="team" onClick={() => setToggleMenu(false)}>
                  Team
                </a>
              </li>
              <li>
                <a href="/uaenews" onClick={() => setToggleMenu(false)}>
                  UAE News
                </a>
              </li>
              <li>
                <a href="#superseries" onClick={() => setToggleMenu(false)}>
                  100 Pioneers List 
                </a>
              </li>
              <li>
                <a href="#faqs" onClick={() => setToggleMenu(false)}>
                  FAQS
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={() => setToggleMenu(false)}>
                  Gallery
                </a>
              </li>
              
              
             
              <li>
                <a href="#support" onClick={() => setToggleMenu(false)}>
                  Support
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
