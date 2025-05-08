import React from 'react';
import { Link } from 'react-router-dom'; 
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <img src="/images/hero-drink.jpg" alt="a header page for the main page" />
        <div className="hero-text">
          <h1>Refreshing Sugarcane & Fruit Drinks</h1>
          <p>Natural | Fresh | Delicious</p>
          
        {/* button */}
        <Link to="/menu">
             <button className="menu-button">See Our Menu</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
