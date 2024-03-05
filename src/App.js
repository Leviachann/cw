import React, { useState } from 'react';
import CardList from './CardList';
import CardForm from './CardForm';
import CardDetails from './CardDetails';

function App() {
  const [cards, setCards] = useState([]);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleAddCard = (newCard) => {
    setCards([...cards, { ...newCard, totalIncome: 0, totalExpenses: 0, incomeList: [], expenseList: [] }]);
  };

  const handleAddIncome = (index, { amount, reason }) => {
    const updatedCards = [...cards];
    updatedCards[index].totalIncome += amount;
    updatedCards[index].incomeList.push({ amount, reason });
    setCards(updatedCards);
  };

  const handleAddExpense = (index, { amount, reason }) => {
    const updatedCards = [...cards];
    updatedCards[index].totalExpenses += amount;
    updatedCards[index].expenseList.push({ amount, reason });
    setCards(updatedCards);
  };

  const handleClickCard = (index) => {
    setSelectedCardIndex(index);
  };

  return (
    <div>
      <CardList cards={cards} handleClick={handleClickCard} />
      <CardForm handleAddCard={handleAddCard} />
      {selectedCardIndex !== null && (
        <CardDetails
          card={cards[selectedCardIndex]}
          handleAddIncome={(amount) => handleAddIncome(selectedCardIndex, amount)}
          handleAddExpense={(amount) => handleAddExpense(selectedCardIndex, amount)}
        />
      )}
    </div>
  );
}

export default App;
