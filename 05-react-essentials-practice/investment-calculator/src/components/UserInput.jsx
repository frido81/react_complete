import { useState } from 'react';

export default function UserInput({ userInput, inputChanged }) {
    return (
        <>
            <div id="user-input">
                <div className="input-group">
                    <div>
                        <label>Initial Investment</label>
                        <input
                            type="number"
                            value={userInput.initialInvestment}
                            onInput={(event) => inputChanged('initialInvestment', event)}></input>

                        <label>Expected Return</label>
                        <input
                            type="number"
                            value={userInput.expectedReturn}
                            onInput={(event) => inputChanged('expectedReturn', event)}></input>
                    </div>

                    <div>
                        <label>Anual investment</label>
                        <input
                            type="number"
                            value={userInput.annualInvestment}
                            onInput={(event) => inputChanged('annualInvestment', event)}></input>

                        <label>Duration</label>
                        <input
                            type="number"
                            value={userInput.duration}
                            onInput={(event) => inputChanged('duration', event)}></input>
                    </div>
                </div>
            </div>
        </>
    );
}
