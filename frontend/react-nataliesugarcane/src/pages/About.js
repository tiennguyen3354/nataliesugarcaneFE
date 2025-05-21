import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <main className="about-page">
      <section className="body">
        <div className="about-text">
          <h3>ABOUT US</h3>
        </div>

        <div className="about-body">
          <div className="story">
            <h1>Our Story</h1>
            <h3>
              We proudly serve authentic Vietnamese-style drinks, crafted with traditional
              recipes and fresh ingredients to bring you a true taste of Vietnam in every cup.
            </h3>
            <p>
              Founded in 2016, our sugarcane shop was born from a love for fresh, natural flavors and the
              desire to share the goodness of real fruits with our community. We take pride in crafting refreshing
              drinks made from the freshest sugarcane and handpicked fruits, ensuring every sip is pure, delicious,
              and bursting with nature’s best. Our journey is rooted in tradition but inspired by innovation,
              always aiming to bring you the perfect blend of health and taste in every cup.
            </p>
          </div>

 
          <div className="about-image">
            <img src="/images/body-img.png" alt="fresh sugarcane juice" />
          </div>

      
          <div className="vision">
            <h1>Our Vision</h1>
            <p>
              Our vision is to create memorable drinks that keep our customers coming back time and again.
              We are dedicated to using only real fruits—never artificial flavors—because we believe that
              authenticity is the key to great taste and lasting impressions. Every cup we craft is a promise
              to deliver freshness, quality, and a unique experience that stays with you long after the last sip.
            </p>
            <ul>
              <li>Commitment to using fresh, real fruits in every drink</li>
              <li>Creating unforgettable flavors that customers love and remember</li>
              <li>Building lasting relationships through quality and authenticity</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Locations Section */}
<section className="location-section">
  <div className="location-heading">
    <h3>LOCATIONS</h3>
  </div>

  <div className="location">
    {/* Location 1 */}
    <div className="location-1">
      <img src="/images/location.png" alt="location one" />
           <div>
        <h1>Natalie's Sugarcane and Desserts</h1>
        <p>17348 Southcenter Pkwy, Tukwila, WA 98188</p>
              <p><strong>Phone Number</strong> :   (206) 666-2675</p>
              <p><strong> Sunday - Thursday</strong></p>
              <p> 10am - 7pm</p>
              <p><strong> Friday - Saturday</strong></p>
              <p> 10am - 8pm </p>
      </div>
    </div>

    {/* Location 2 */}
    <div className="location-2">
      <img src="/images/location.png" alt="location two" />
      <div>
        <h1>Natalie's On Alki</h1>
        <p>2532 Alki Ave SW, Seattle, WA 98116</p>
              <p><strong>Phone Number</strong> :   (206) 415-9944</p>
              <p><strong> Monday - Friday</strong></p>
              <p> 10am - 8pm</p>
              <p><strong> Saturday - Sunday</strong></p>
              <p> 9am - 8pm </p>
      </div>
    </div>
  </div>
</section>


    </main>
  );
};

export default About;
