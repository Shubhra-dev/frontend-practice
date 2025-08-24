import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

export default function ChatApp() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: "New message at " + new Date().toLocaleTimeString(),
        },
      ]);
    }, 3000);

    // cleanup
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold mb-4">💬 Chat Simulation</h1>
        <button
          onClick={() => setMessages([])}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Reset
        </button>
      </div>
      <ul className="space-y-2">
        {messages.map((msg) => (
          <div key={msg.id} className="flex items-start justify-normal gap-2">
            <div className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-full">
              <FaUser />
            </div>
            <div className="p-2 border rounded bg-gray-100">{msg.text}</div>
          </div>
        ))}
      </ul>
    </div>
  );
}
