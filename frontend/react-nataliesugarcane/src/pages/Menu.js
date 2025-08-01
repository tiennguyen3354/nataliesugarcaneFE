import React, { useEffect, useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [drinks, setDrinks] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  const [openCategory, setOpenCategory] = useState(null); 

  useEffect(() => {
   
    fetch('https://api.nataliesugarcaneanddesserts.com/category')
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
      <div className='menu-text-container'> 
        <h1 className="menu-text">Our Menu</h1>
        <p>Every sip of a fresh drink is a reminder that simple pleasures are the sweetest.</p>
      </div>
    
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
                 {drink.image ? (
                  <img
                    src={`data:image/jpeg;base64,${drink.image}`}
                    alt={drink.name}
                    style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '6px' }}
                  />
                  ) : (
                  <span>No Image</span>
                )}
                  <div className="drink-info">
                    <h3>{drink.name}</h3>
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
