import React, { useState } from 'react'


import ExpenseForm from './ExpenseForm'
import NewExpenseButton from './NewExpenseButton'
import './NewExpense.css';

const NewExpense = (props) => {

    const [requestNewExpense, setRequestNewExpense] = useState(false);
    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData)
        props.onAddExpense(expenseData)
        setRequestNewExpense(false);
    }
    function requestNewExpenseHandler() {
        console.log("button clicked");
        setRequestNewExpense(true);
    }

    if (requestNewExpense == true) {
        return (
            <div className="new-expense">
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
            </div>
        )

    } else {
        return (
            <div className="new-expense">
                <button onClick={requestNewExpenseHandler}>Add new expense</button>
            </div>
        )
    }
};

export default NewExpense;