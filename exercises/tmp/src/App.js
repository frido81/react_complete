import React, { useState } from 'react';

import './styles.css';

// don't change the Component name "App"
// important: In this code editor, use React.useState() instead of just useState()
export default function App() {

    const [price, setPrice] = React.useState(price)

    function applyDiscount() {
        price = 10;

    }

    //function setPrice() {
    //price=100;
    //}
    return (
        <div>
            <p>{price}</p>
            <button onClick={applyDiscount}>Apply Discount</button>
        </div>
    );


}
