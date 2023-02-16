import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import ExpenseDate from "../ExpenseDate";

const NewExpense = (props) => {
    const [formVisibility, changeFormVisibility] = useState(false);
    const SaveExpenseData = (enteredExpensData) => {
        const expanseData = {
            ...enteredExpensData,
            id: Math.random().toString(),
        };
        props.onAddExpanse(expanseData);
        // console.log(expanseData);
    };
    const showForm = () => {
        changeFormVisibility(true);
    };

    const hideForm = () => {
        changeFormVisibility(false);
    };

    return (
        <div className="new-expense">
            {!formVisibility && <button onClick={showForm}> New Expanse </button>}
            {formVisibility &&<ExpenseForm
                hideForm={hideForm}
                onSaveExpenseData={SaveExpenseData}
            />}
        </div>
    );
};

export default NewExpense;
