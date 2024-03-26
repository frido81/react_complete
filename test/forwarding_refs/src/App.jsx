import { useRef } from 'react';
import Input from './components/Input.jsx';

export const userData = {
    name: '',
    email: '',
};

export default function App() {
    const nameInput = useRef();
    const emailInput = useRef();

    function handleSaveData() {
        userData.name = nameInput.current.value;
        userData.email = emailInput.current.value;

        console.log(userData);
    }

    return (
        <div id="app">
            <Input ref={nameInput} type="text" label="Your Name" />
            <Input ref={emailInput} type="email" label="Your E-Mail" />
            <p id="actions">
                <button onClick={handleSaveData}>Save Data</button>
            </p>
        </div>
    );
}
