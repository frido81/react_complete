import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState([0, 1])

  const taskName=useRef();

  function saveHandler() {
    console.log(taskName.current.value);
    setCount([
        ...count,
        taskName.current.value
    ]

    );

  }

  return (
    <>
        <input ref={taskName}/>
        <button onClick={saveHandler}>OK</button>
        <ul>
            {count.map((c,i) => (
                <li key={i}>{c}</li>
            )
            )}
        </ul>
    </>
  )
}

export default App
