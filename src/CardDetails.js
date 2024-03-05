import React, { useState } from 'react';
import BarGraph from './BarGraph';
const CardDetails = ({ card, handleAddIncome, handleAddExpense }) => {
  const [incomeAmount, setIncomeAmount] = useState('');
  const [incomeReason, setIncomeReason] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseReason, setExpenseReason] = useState('');

  const handleIncomeChange = (e) => {
    setIncomeAmount(e.target.value);
  };

  const handleIncomeReasonChange = (e) => {
    setIncomeReason(e.target.value);
  };

  const handleExpenseChange = (e) => {
    setExpenseAmount(e.target.value);
  };

  const handleExpenseReasonChange = (e) => {
    setExpenseReason(e.target.value);
  };

  const handleAddIncomeClick = () => {
    if (incomeAmount !== '' && incomeReason !== '') {
      handleAddIncome({ amount: parseFloat(incomeAmount), reason: incomeReason });
      setIncomeAmount('');
      setIncomeReason('');
    }
  };

  const handleAddExpenseClick = () => {
    if (expenseAmount !== '' && expenseReason !== '') {
      handleAddExpense({ amount: parseFloat(expenseAmount), reason: expenseReason });
      setExpenseAmount('');
      setExpenseReason('');
    }
  };

  return (
    <div>
      <h2>Card Details</h2>
      <p>Name: {card.name}</p>
      <p>Currency: {card.currency}</p>
      <p>Total Income: {card.totalIncome}</p>
      <p>Total Expenses: {card.totalExpenses}</p>
      <div>
        <input
          type="number"
          placeholder="Income Amount"
          value={incomeAmount}
          onChange={handleIncomeChange}
        />
        <input
          type="text"
          placeholder="Income Reason"
          value={incomeReason}
          onChange={handleIncomeReasonChange}
        />
        <button onClick={handleAddIncomeClick}>Add Income</button>
      </div>
      <div>
        <input
          type="number"
          placeholder="Expense Amount"
          value={expenseAmount}
          onChange={handleExpenseChange}
        />
        <input
          type="text"
          placeholder="Expense Reason"
          value={expenseReason}
          onChange={handleExpenseReasonChange}
        />
        <button onClick={handleAddExpenseClick}>Add Expense</button>
      </div>
      <div>
        <h3>Income List:</h3>
        <ul>
          {card.incomeList.map((income, index) => (
            <li key={index}>{`${income.reason}: ${income.amount}`}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Expense List:</h3>
        <ul>
          {card.expenseList.map((expense, index) => (
            <li key={index}>{`${expense.reason}: ${expense.amount}`}</li>
          ))}
        </ul>
      </div>
      <BarGraph totalIncome={card.totalIncome} totalExpenses={card.totalExpenses} />
    </div>
  );
};

export default CardDetails;
