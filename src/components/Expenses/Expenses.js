import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('2023');

    // const filterChangeHandler = (value) => {
    //     setFilterYear(value);
    //     console.log(value);
    // }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filterYear} setFilterChange={setFilterYear}/>
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />
        </Card>
    );
}
export default Expenses;
