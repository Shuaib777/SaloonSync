import React from "react";
import "./style.scss";
import { FaYoutube } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="links">
        <a href="">About Us</a>
        <a href="">Contact Us</a>
        <a href="">Terms and Conditions</a>
        <a href="">Artists SignUp</a>
      </div>
      <div className="items">
        <div className="copyright">© Copyright</div>
        <div className="icons">
          <a href="">
            <FaYoutube />
          </a>
          <a href="">
            <FaSquareFacebook />
          </a>
          <a href="">
            <FaInstagram />
          </a>
          <a href="">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
