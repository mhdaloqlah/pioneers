import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsMeta,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { RiVipDiamondFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import "./Footer.css";
import FooterOverlay from "./FooterOverlay";
import Logo from "../../../public/assets/logo.png";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, Dubai, Ed 10019, UAE</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={Logo} alt="footer_logo" />
        <p className="p__opensans">
          &quot;The best way to find yourself is to lose yourself in the service
          of others&quot;
        </p>
        <RiVipDiamondFill
          color="#b5964d"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />

        <div className="app__footer-links_icons">
          <FaFacebookF />
          <BsInstagram />
          <FaLinkedinIn />

          <BsTwitter />
          <BsYoutube />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>
  </div>
);

export default Footer;
