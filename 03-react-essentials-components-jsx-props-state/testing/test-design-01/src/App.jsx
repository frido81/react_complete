import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ROUTINES } from './data.js'
function DagDeel(props) {
    return (
        <div className="card">
            <h2>{props.title}</h2>
            <ul>
                {props.routine.map((routine) => (
                    <li>{routine}</li>
                ))}
            </ul>
        </div >
    )

}
function App() {
    const [count, setCount] = useState(0)

    return (
        <main>

            {ROUTINES.map((routine) => (
                <DagDeel {...routine} />
            ))}

            <DagDeel title="ochtend" routine={["niet sluimeren", "lichten aan"]} />
            <DagDeel title="dagbesteding" routine={["dit is een hele lange actie1 met wat andere namen en wat extra informatie nog meer informatie", "actie2"]} />
            <DagDeel title="avond" routine={["dit is een hele lange actie1 met wat andere namen en wat extra informatie nog meer informatie", "actie2"]} />

            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </main>
    )
}

export default App
