import './Expenses.css'

import React, { useState } from 'react'

import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';


function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2021');

    function changeFilterHandler(year) {
        setFilteredYear(year);
    }

    const result = props.expenses.filter(
        (expense) => expense.date.getFullYear().toString() === filteredYear
    )

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterChange={changeFilterHandler} />
            <ExpensesList items={result} />

        </Card>
    );
}

export default Expenses;

/*
{props.expenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}

*/
