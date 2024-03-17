import { useState } from 'react';
import './index.css';

function App() {
    const [choice, setChoice] = useState(null);

    let cssClass;

    if (choice === 'yes') {
        cssClass = 'highlight-green';
    } else if (choice === 'no') {
        cssClass = 'highlight-red';
    }

    return (
        <div id="app">
            <h1 className={cssClass}>CSS is great!</h1>
            <menu>
                <li>
                    <button onClick={() => setChoice('yes')}>Yes</button>
                </li>
                <li>
                    <button onClick={() => setChoice('no')}>No</button>
                </li>
            </menu>
        </div>
    );
}

export default App;
