import React, { useState } from 'react'

import './ExpenseForm.css'

function ExpenseForm() {

    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [amount, setAmount] = useState('');
    // const [date, setDate] = useState('');

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    })

    function titleChangeHandler(event) {
        // setEnteredTitle(event.target.value);
        setUserInput({
            enteredTitle: event.target.value,
        })
    }

    function amountChangeHandler(event) {
        // setAmount(event.target.value);
        setUserInput({
            enteredAmount: event.target.value,
        })
    }

    function dateChangeHandler(event) {
        // setDate(event.target.value);
        setUserInput({
            enteredDate: event.target.value,
        })

    }
    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add expense</button>
        </div>
    </form>
}
export default ExpenseForm;