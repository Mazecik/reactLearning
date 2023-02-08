import logo from "./logo.svg";
import "./App.css";

import NewExpense from "./components/Expenses/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
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

  return (
    <div>
      <NewExpense/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
