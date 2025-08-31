import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import AutoFocusInput from "./components/AutofocusInput";
import CounterRefDemo from "./components/CounterRefDemo";
import PrevValueDemo from "./components/PrevValueDemo";
import ForwardRefDemo from "./components/ForwardRefDemo";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 p-6">
            <Dashboard />
            <AutoFocusInput />
            <CounterRefDemo />
            <PrevValueDemo />
            <ForwardRefDemo />
          </main>
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}
