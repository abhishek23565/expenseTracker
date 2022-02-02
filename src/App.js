// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";
import UserInput from "./my app/UserInput/UserInput.js";
import ExpenseItem from './my app/Expenses/ExpenseItem.js';
import Card from "./my app/Expenses/Card.js";
import ExpenseChart from "./my app/Expenses/ExpenseChart.js";
import ExpenseFilter from "./my app/Expenses/ExpenseFilter.js";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: "Car Insurance",
    amount: 1500,
    date: new Date(2021, 2, 18),
  }
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [filteredYear, setFilteredYear] = useState('2020');


  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = expenses.filter(expeanse => {
    return expeanse.date.getFullYear().toString() === filteredYear;
  });


  function addExpenseHandler(expense) {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    })
  }

  let white = "white";

  return (
    <div>
      <UserInput onAddExpense={addExpenseHandler} />

      <Card>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpenseChart expenseP={filteredExpenses} />
        {filteredExpenses.length === 0 ? <h2 style={{ color: white }}>No Expenses Added Yet! </h2> :
          filteredExpenses.map(expenseArray =>
            <ExpenseItem
              key={expenseArray.id}//used by react to identify all the containers separetely
              title={expenseArray.title}
              amount={expenseArray.amount}
              date={expenseArray.date} />)
        }

      </Card>
    </div>

  );
}

export default App;
