import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../asset/logo.png';


import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
        <div className="navbar-logo">
            <Link to="/">
                <img src={logo} alt="Natalie's Sugarcane" className="logo-img" />
            </Link>
        </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
