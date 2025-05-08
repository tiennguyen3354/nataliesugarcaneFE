import React, { useEffect, useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [drinks, setDrinks] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  const [openCategory, setOpenCategory] = useState(null); 

  useEffect(() => {
   
    fetch('http://168.231.67.207:8282/category')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch drinks');
        }
        return response.json();
      })
      .then((data) => {
        setDrinks(data.result); 
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message); 
        setLoading(false); 
      });
  }, []); 

 
  if (loading) {
    return <div>Loading...</div>;
  }

  
  if (error) {
    return <div>Error: {error}</div>;
  }

  
  const groupedDrinks = drinks.reduce((acc, drink) => {
    const { category } = drink;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(drink);
    return acc;
  }, {});

  const handleCategoryClick = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div className="menu">
      <h1>Our Menu</h1>
      {Object.keys(groupedDrinks).map((category) => (
        <div key={category} className="category-section">
          <div className="category-header" onClick={() => handleCategoryClick(category)}>
            <h2>{category}</h2>
            <span>{openCategory === category ? '▲' : '▼'}</span>
          </div>
          {openCategory === category && (
            <div className="drink-gallery">
              {groupedDrinks[category].map((drink) => (
                <div key={drink.id} className="drink-card">
                  <img src="https://via.placeholder.com/250" alt={drink.name} className="drink-img" />
                  <div className="drink-info">
                    <h3>{drink.name}</h3>
                    <p>{drink.description}</p>
                    <p className="price">${drink.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Menu;
