// components/Dashboard.jsx
import React from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Dashboard() {
  const { state } = useAuth();

  return (
    <div className="mt-6">
      {state.isAuth ? (
        <h2 className="text-xl font-semibold">Welcome, {state.user} 🎉</h2>
      ) : (
        <h2 className="text-xl font-semibold text-gray-500">Please log in.</h2>
      )}
    </div>
  );
}
