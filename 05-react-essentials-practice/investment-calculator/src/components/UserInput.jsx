
import { useState } from 'react';

export default function UserInput({ description, label, initialValue, inputChanged }) {

    const [value, setValue] = useState(initialValue);

    function handleChange(event) {
        setValue(Number(event.target.value));
        inputChanged(label, Number(event.target.value))
    }

    return (
        <>
            <label htmlFor={label}>{description}</label>
            <input type="number" id={label} name={label} value={value} onChange={handleChange}></input>
        </>


    )
}