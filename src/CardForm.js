import React, { useState } from 'react';

const CardForm = ({ handleAddCard }) => {
  const [cardName, setCardName] = useState('');
  const [currency, setCurrency] = useState('rubl');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddCard({ name: cardName, currency });
    setCardName('');
    setCurrency('rubl');
  };

  return (
    <div>
      <h2>Add Card</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Card Name"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          required 
        />
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="rubl">RUB</option>
          <option value="usd">USD</option>
          <option value="azn">AZN</option>
          <option value="euro">Euro</option>
        </select>
        <button type="submit">Add Card</button>
      </form>
    </div>
  );
};

export default CardForm;
