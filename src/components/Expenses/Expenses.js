import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

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
            {filtredExpenses.map((item) => {
                return (
                    <ExpenseItem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    />
                );
            })}
        </Card>
    );
};
export default Expenses;
