import ReactDOM from "react-dom/client";


import App from "./components/App";
import "./app.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);