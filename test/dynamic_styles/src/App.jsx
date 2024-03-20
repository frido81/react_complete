import { useState } from "react";
import "./App.css";

// don't change the Component name "App"
export default function App() {
  const [toggle, setToggle] = useState(false);

  function changeToggle() {
    toggle ? setToggle(false) : setToggle(true);
  }

  return (
    <div>
      <p style={{ color: toggle ? "red" : "white" }}>Style me!</p>
      <button onClick={changeToggle}>Toggle style</button>
    </div>
  );
}
