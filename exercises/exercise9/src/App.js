import React from 'react';

import './styles.css';

export default function App() {
    const [validMessage, setValid] = React.useState("invalid")

    // don't change the Component name "App"
    function checkValid(event) {
        console.log(event.target.value);


        if (event.target.value.trim().length < 3) {
            setValid("Invalid")
            // Todo: Update state to say "Invalid"
        } else {
            setValid("Valid")
            // Todo: Update state to say "Valid"
        }
    }


    return (
        <form>
            <label>Your message</label>
            <input type="text" onChange={checkValid} />
            <p>{validMessage} message</p>
        </form>
    );
}