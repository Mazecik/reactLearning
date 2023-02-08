import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import ExpenseDate from "../ExpenseDate";

const NewExpense = (props) => {
    const SaveExpenseData = (enteredExpensData) => {
        const expanseData = {
            ...enteredExpensData,
            id: Math.random().toString()
        };
        props.onAddExpanse(expanseData);
        // console.log(expanseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={SaveExpenseData} />
        </div>
    );
};

export default NewExpense;
