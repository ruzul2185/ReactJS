import { createContext, useState, useContext } from "react";

// 1. Create Context
export const ThemeContext = createContext(undefined);

// 2. Context Provider Function
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev == "light" ? "dark" : "light"));
  };

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};

// 3. Createing custom hook
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("This requires ThemeProvider!");
  }
  return context;
};
