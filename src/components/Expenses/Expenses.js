import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState("2023");
    // const filterChangeHandler = (value) => {
    //     setFilterYear(value);
    //     console.log(value);
    // }
    const filtredExpenses = props.items.filter((expense) => {return expense.date.getFullYear().toString() === filterYear});
    
    return (
        <li>
        <Card className="expenses">
            <ExpensesFilter
                selected={filterYear}
                setFilterChange={setFilterYear}
            />
            <ExpensesList items={filtredExpenses}/>
        </Card>
        </li>
    );
};
export default Expenses;
