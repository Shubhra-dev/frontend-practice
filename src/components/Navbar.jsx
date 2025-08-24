// components/Navbar.jsx
import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";

export default function Navbar() {
  const { state: auth, dispatch: authDispatch } = useAuth();
  const { state: theme, dispatch: themeDispatch } = useTheme();

  return (
    <nav className="flex items-center justify-between px-6 py-3 shadow">
      <h1 className="font-bold text-lg">🌐 My App</h1>
      <div className="flex gap-3">
        <button
          className="px-3 py-1 bg-indigo-500 text-white rounded"
          onClick={() => themeDispatch({ type: "TOGGLE_THEME" })}
        >
          Toggle {theme.theme === "light" ? "Dark" : "Light"}
        </button>

        {auth.isAuth ? (
          <button
            className="px-3 py-1 bg-red-500 text-white rounded"
            onClick={() => authDispatch({ type: "LOGOUT" })}
          >
            Sign Out
          </button>
        ) : (
          <button
            className="px-3 py-1 bg-green-500 text-white rounded"
            onClick={() => authDispatch({ type: "LOGIN", payload: "John Doe" })}
          >
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
}
