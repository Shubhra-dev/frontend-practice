// contexts/AuthContext.jsx
import React, { createContext, useReducer, useContext } from "react";

const AuthContext = createContext();

const initialState = { user: null, isAuth: false };

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload, isAuth: true };
    case "LOGOUT":
      return { ...state, user: null, isAuth: false };
    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
