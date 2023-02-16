import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState("2023");
    // const filterChangeHandler = (value) => {
    //     setFilterYear(value);
    //     console.log(value);
    // }
    const filtredExpenses = props.items.filter((expense) => {return expense.date.getFullYear().toString() === filterYear});
    
    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filterYear}
                setFilterChange={setFilterYear}
            />
            <ExpensesChart expenses={filtredExpenses}/>
            <ExpensesList items={filtredExpenses}/>
        </Card>
    );
};
export default Expenses;
