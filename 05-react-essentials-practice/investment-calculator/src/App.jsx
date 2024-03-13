import { useState } from 'react';

import UserInput from './components/UserInput.jsx'
import Result from './components/Result.jsx'

import { calculateInvestmentResults } from './util/investment.js'

const INITIAL_INPUTS = {
    initialInvestment: 15000,
    annualInvestment: 900,
    expectedReturn: 5.6,
    duration: 10
}

function App() {

    //   initialInvestment,
    const [initialInvestment, setInitialInvestment] = useState(INITIAL_INPUTS.initialInvestment);
    const [annualInvestment, setAnnualInvestment] = useState(INITIAL_INPUTS.annualInvestment);
    const [expectedReturn, setExpectedReturn] = useState(INITIAL_INPUTS.expectedReturn);
    const [duration, setDuration] = useState(INITIAL_INPUTS.duration);
    const [result, setResult] = useState(calculateInvestmentResults(INITIAL_INPUTS));

    function inputChanged(label, value) {
        console.log(label, 'changed', value)
        if (label === "initial_investment") {
            setInitialInvestment(value)
            setResult(calculateInvestmentResults({ initialInvestment: Number(value), annualInvestment: annualInvestment, expectedReturn: expectedReturn, duration: duration }))
        }
        if (label === "annual_investment") {
            setAnnualInvestment(value)
            setResult(calculateInvestmentResults({ initialInvestment: initialInvestment, annualInvestment: Number(value), expectedReturn: expectedReturn, duration: duration }))
        }
        if (label === "expected_return") {
            setExpectedReturn(value)
            setResult(calculateInvestmentResults({ initialInvestment: initialInvestment, annualInvestment: annualInvestment, expectedReturn: Number(value), duration: duration }))
        }
        if (label === "duration") {
            setDuration(value)
            setResult(calculateInvestmentResults({ initialInvestment: initialInvestment, annualInvestment: annualInvestment, expectedReturn: expectedReturn, duration: Number(value) }));
        }
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

                        <UserInput label="annual_investment" description="Annual Investment" initialValue={annualInvestment} inputChanged={inputChanged} />
                        <UserInput label="duration" description="Duration" initialValue={duration} inputChanged={inputChanged} />
                    </div>
                </div>
            </div>
            <Result result={result} />
        </main>
    )
}

export default App
