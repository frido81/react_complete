import React from 'react';

import Input from './Input';

export const userData = {
    name: '',
    email: '',
};

export function App() {
    const inpName = React.useRef();

    const inpEmail = React.useRef();

    function handleSaveData() {
        userData.name = inpName.current.value;

        userData.email = inpEmail.current.value;

        console.log(userData);
    }

    return (
        <div id="app">
            <Input ref={inpName} type="text" label="Your Name" />

            <Input ref={inpEmail} type="email" label="Your E-Mail" />

            <p id="actions">
                <button onClick={handleSaveData}>Save Data</button>
            </p>
        </div>
    );
}
