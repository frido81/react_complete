import { useState } from 'react';

import UserInput from './components/UserInput.jsx'
import Results from './components/Results.jsx'

import { calculateInvestmentResults } from './util/investment.js'
function App() {

    //   initialInvestment,
    const [initialInvestment, setInitialInvestment] = useState(1000);
    const [anualInvestment, setAnualInvestment] = useState(1500);
    const [expectedReturn, setExpectedReturn] = useState(5);
    const [duration, setDuration] = useState(10);
    const [result, setResult] = useState([]);

    function inputChanged(label, value) {
        console.log(label, 'changed', value)
        let result = []
        if (label === "initial_investment") {
            setInitialInvestment(value)
            result = calculateInvestmentResults({ initialInvestment: Number(value), annualInvestment: anualInvestment, expectedReturn: expectedReturn, duration: duration })
        }
        if (label === "anual_investment") {
            setAnualInvestment(value)
            result = calculateInvestmentResults({ initialInvestment: initialInvestment, annualInvestment: Number(value), expectedReturn: expectedReturn, duration: duration })
        }
        if (label === "expected_return") {
            setExpectedReturn(value)
            result = calculateInvestmentResults({ initialInvestment: initialInvestment, annualInvestment: anualInvestment, expectedReturn: Number(value), duration: duration })
        }
        if (label === "duration") {
            setDuration(value)
            result = calculateInvestmentResults({ initialInvestment: initialInvestment, annualInvestment: anualInvestment, expectedReturn: expectedReturn, duration: Number(value) })
        }
        setResult(result)
    }

    return (
        <main>
            <div id="user-input">
                <div className="input-group">
                    <div>
                        <UserInput label="initial_investment" description="Initial Investment" initialValue={initialInvestment} inputChanged={inputChanged} />
                        <UserInput label="expected_return" description="Expected Return" initialValue={expectedReturn} inputChanged={inputChanged} />

                    </div>
                    <div>

                        <UserInput label="anual_investment" description="Anual Investment" initialValue={anualInvestment} inputChanged={inputChanged} />
                        <UserInput label="duration" description="Duration" initialValue={duration} inputChanged={inputChanged} />
                    </div>
                </div>
            </div>
            <Results result={result} />
        </main>
    )
}

export default App
