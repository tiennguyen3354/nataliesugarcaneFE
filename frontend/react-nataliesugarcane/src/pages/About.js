import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>Welcome to Natalie's Sugarcane & Dessert</h1>
        <p>Refreshing. Natural. Handcrafted with Love.</p>
      </div>

      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Natalie's Sugarcane was born from a love of tradition and a passion for freshness. What started as a small family stand is now a cozy corner of refreshment, offering the finest cold-pressed sugarcane juices, tropical drinks, and handcrafted desserts made with care.
        </p>
      </section>

      <section className="about-section">
        <h2>What Makes Us Different</h2>
        <ul>
          <li>🌿 Freshly pressed sugarcane—never from concentrate</li>
          <li>🍍 Real fruits & natural ingredients</li>
          <li>❤️ Made with love, family values, and attention to detail</li>
          <li>🌎 Eco-friendly practices to support a greener planet</li>
        </ul>
      </section>

      <section className="about-gallery">
        <img src="https://images.unsplash.com/photo-1543779503-6fa27e44c1d5?auto=format&fit=crop&w=800&q=80" alt="Sugarcane juice" />
        <img src="https://images.unsplash.com/photo-1590080876643-e60eaf1f6470?auto=format&fit=crop&w=800&q=80" alt="Fresh ingredients" />
        <img src="https://images.unsplash.com/photo-1612198511863-13ef127cf4a9?auto=format&fit=crop&w=800&q=80" alt="Serving drinks" />
      </section>
    </div>
  );
};

export default About;
