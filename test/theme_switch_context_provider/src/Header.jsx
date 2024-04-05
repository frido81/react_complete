import { ThemeContext } from "./ThemeContextProvider.jsx";
import { useContext } from "react";

export default function Header() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <header>
      <h1>Demo Website</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
}
