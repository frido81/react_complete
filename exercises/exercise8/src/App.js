import React, { useState } from 'react';

import Product from './components/Product'
import './styles.css';

// don't change the Component name "App"
// important: In this code editor, use React.useState() instead of just useState()
export default function App() {
    /*
        return (
            <Product price='100'></Product >
        );
    */

    const [price, setPrice] = React.useState(100)

    function applyDiscount() {
        setPrice(75);
    }


    return (
        <div>
            <p>{price}</p>
            <button onClick={applyDiscount}>Apply Discount</button>
        </div>
    );

}
