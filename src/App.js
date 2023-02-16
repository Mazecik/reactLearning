import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import NewExpense from "./components/Expenses/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const Dummyexpenses = [
    {
      id: "e1",
      title: "Naprawa samochodu",
      amount: 250.54,
      date: new Date(2023, 2, 8),
    },
    {
      id: "e2",
      title: "Paliwo",
      amount: 100.01,
      date: new Date(2023, 2, 4),
    },
    {
      id: "e3",
      title: "Zakupy",
      amount: 58.37,
      date: new Date(2023, 2, 6),
    },
  ];
  const [expenses, setExpenses] = useState(Dummyexpenses);

  const addExpenseHandler = expense => {
    console.log(expense);
    setExpenses([
      expense,
      ...expenses
    ])
  };

  return (
    <div>
      <NewExpense onAddExpanse={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
