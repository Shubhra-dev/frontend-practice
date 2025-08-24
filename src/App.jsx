import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 p-6">
            <Dashboard />
          </main>
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}
