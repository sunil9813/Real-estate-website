import React from "react";
import { footer } from "../../data/Data";
import "./footer.css";
import logo from "../../images/logo-light.png"; // Make sure to replace with the actual path to your logo
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container '>
          <div className='logo-section'>
            <img src={logo} alt="RentUP Logo" className='footer-logo' />
            <p className='slogan'>Your Dream Home Awaits</p>
          </div>

          <div className='social-media'>
            <h4>Follow us:</h4>
            <div className='social-icons'>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Remaining footer content */}
          {footer.map((val, index) => (
            <div className='box' key={index}>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items, idx) => (
                  <li key={idx}>{items.list}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2024 RentUP.</span>
      </div>
    </>
  );
};

export default Footer;
