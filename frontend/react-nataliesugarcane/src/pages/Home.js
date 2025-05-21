import React from 'react';
import { Link } from 'react-router-dom'; 
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <img className='hero-image' src="/images/hero-drink.jpg" alt="a header page for the main page" />
        <div className="hero-text">
          <h1>Refreshing Sugarcane & Fruit Drinks</h1>
          <p>Natural | Fresh | Delicious</p>
          
        {/* button */}
        <Link to="/menu">
             <button className="menu-button">See Our Menu</button>
        </Link>
        </div>
      </div>

      {/* after hero - body  */}
      <div className='body'> 
        <div className='about-text'> 
          <h3>ABOUT US </h3>
        </div>
        <div className='about-body'> 
          <div className='story'> 
            <h1>Our Story</h1>
            <h3>We proudly serve authentic Vietnamese-style drinks, crafted with traditional recipes and fresh ingredients to bring you a true taste of Vietnam in every cup.</h3>
            <p>Founded in 2016, our sugarcane shop was born from a love for fresh, natural flavors and the desire to share the goodness of real fruits with our community. We take pride in crafting refreshing drinks made from the freshest sugarcane and handpicked fruits, ensuring every sip is pure, delicious, and bursting with nature’s best. Our journey is rooted in tradition but inspired by innovation, always aiming to bring you the perfect blend of health and taste in every cup.</p>
          </div>
          <div className='about-image'>
             <img src="/images/body-img.png" alt="a header page for the main page" />
          </div>
          <div className='vision'> 
              <h1>Our Vision</h1>
            <p>Our vision is to create memorable drinks that keep our customers coming back time and again. We are dedicated to using only real fruits—never artificial flavors—because we believe that authenticity is the key to great taste and lasting impressions. Every cup we craft is a promise to deliver freshness, quality, and a unique experience that stays with you long after the last sip.</p>
            <ul> 
              <li>
                Commitment to using fresh, real fruits in every drink
              </li>
              <li>
                Creating unforgettable flavors that customers love and remember
              </li>
              <li>
                Building lasting relationships through quality and authenticity
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* end of body  */}
    
    </div>
  );
};

export default Home;
