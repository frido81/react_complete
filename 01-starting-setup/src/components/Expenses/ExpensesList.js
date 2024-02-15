import React, { useState } from 'react'

import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesFilter = (props) => {

    let expensesContent = <p>No expenses found</p>;

    if (props.items.length === 0) {
        return <h2 className="expenses--list__fallback">Found no expenses</h2>
    }

    if (props.items.length > 0) {
        expensesContent = props.items.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />

        ))
    }
    return <ul className="expenses-list">
        {expensesContent}
    </ul>

};

export default ExpensesFilter;