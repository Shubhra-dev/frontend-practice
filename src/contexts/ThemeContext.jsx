// contexts/ThemeContext.jsx
import React, { createContext, useReducer, useContext } from "react";

const ThemeContext = createContext();

const initialState = { theme: "light" };

function themeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
}

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <div
        className={
          state.theme === "dark"
            ? "bg-gray-900 text-white"
            : "bg-white text-black"
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
