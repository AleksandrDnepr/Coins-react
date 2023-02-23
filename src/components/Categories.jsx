import React from 'react';

function Categories({activeIndex, onChange}) {
  
  const categories = ['All', 'Gold', 'Silver', 'Classic', 'Charity', 'Banknotes'];


  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                onChange(index);
              }}
              className={activeIndex === index ? 'active' : ''}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
