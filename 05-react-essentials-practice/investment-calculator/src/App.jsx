import { useState } from 'react';

import UserInput from './components/UserInput.jsx';
import Result from './components/Result.jsx';
import Header from './components/Header.jsx';

import { calculateInvestmentResults } from './util/investment.js';

function App() {
    //   initialInvestment,
    // const [initialInvestment, setInitialInvestment] = useState(INITIAL_INPUTS.initialInvestment);
    // const [annualInvestment, setAnnualInvestment] = useState(INITIAL_INPUTS.annualInvestment);
    // const [expectedReturn, setExpectedReturn] = useState(INITIAL_INPUTS.expectedReturn);
    // const [duration, setDuration] = useState(INITIAL_INPUTS.duration);
    // const [result, setResult] = useState(calculateInvestmentResults(INITIAL_INPUTS));

    const [userInput, setUserInput] = useState({
        initialInvestment: 15000,
        annualInvestment: 900,
        expectedReturn: 5.6,
        duration: 10,
    });

    const inputIsValid = userInput.duration >= 1;

    function inputChanged(symbol, event) {
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [symbol]: Number(event.target.value),
            };
        });
    }

    return (
        <main>
            <Header />
            <UserInput userInput={userInput} inputChanged={inputChanged} />
            {!inputIsValid && <div class="center">Please enter a duration greater then 0</div>}
            {inputIsValid && <Result userInput={userInput} />}
        </main>
    );
}

export default App;
