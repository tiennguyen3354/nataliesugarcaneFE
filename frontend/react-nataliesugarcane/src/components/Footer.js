import React from 'react';
import './Footer.css';
import { FaPhoneAlt, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p><FaPhoneAlt /> (123) 456-7890</p>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
      </div>
      <p className="footer-note">© 2025 Natalie's Sugarcane & Dessert. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
