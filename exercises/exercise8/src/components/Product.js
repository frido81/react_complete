import React, { useState } from 'react';

function Product(props) {

    const [price, setPrice] = useState(props.price)

    function applyDiscount() {
        // props.price = 10;
        setPrice(80);

    }

    return (
        <div>
            <p>{price}</p>
            <button onClick={applyDiscount}>Apply Discount</button>
        </div>
    )
}
export default Product;