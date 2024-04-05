import { useState, createContext } from "react";

export const ThemeContext = createContext({
  theme: "",
  toggleTheme: () => {},
});

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
    console.log("toggle_theme");
  }

  const ctxValue = {
    theme: theme,
    toggleTheme: toggleTheme,
  };

  return (
    <ThemeContext.Provider value={ctxValue}>{children}</ThemeContext.Provider>
  );
}
