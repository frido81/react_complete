import React, { useState } from 'react';

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);

    // let title = props.title;

    function clickHandler() {
        setTitle("Updated!");
        console.log(title);
    }

    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = "Car insurance"
    const expenseAmount = 294.67;

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <h2>{title}</h2>
            <div className="expens-item__description">
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card >
    );
}

export default ExpenseItem;
