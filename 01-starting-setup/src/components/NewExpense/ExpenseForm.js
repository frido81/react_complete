import React, { useState } from 'react'

import './ExpenseForm.css'

function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    })

    function titleChangeHandler(event) {
        setEnteredTitle(event.target.value);
        // setUserInput({
        // enteredTitle: event.target.value,
        // })
    }

    function amountChangeHandler(event) {
        setEnteredAmount(event.target.value);
        // setUserInput({
        // enteredAmount: event.target.value,
        // })
    }

    function dateChangeHandler(event) {
        setEnteredDate(event.target.value);
        // setUserInput({
        // enteredDate: event.target.value,
        // })
    }

    // const inputChangeHandler = (identifier, value) => {
    //     if (identifier === "title") {
    //         setEnteredTitle(value);
    //     } else if (identifier === "date") {
    //         setEnteredDate(value)
    //     } else {
    //         setEnteredAmount(value);
    //     }

    function submitHandler(event) {

        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        console.log(expenseData);

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('')
        setEnteredAmount(0)
        setEnteredDate('')
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                {/* <input type="text" onChange={(event) => inputChangeHandler(title, event.target.value)} /> */}
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit" >Add expense</button>
        </div>
    </form>
}
export default ExpenseForm;