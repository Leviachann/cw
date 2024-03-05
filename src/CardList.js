import React from 'react';

const CardList = ({ cards, handleClick }) => {
  return (
    <div>
      <h2>My Cards</h2>
      <ul>
        {cards.map((card, index) => (
          <li key={index} onClick={() => handleClick(index)}>
            {card.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;
