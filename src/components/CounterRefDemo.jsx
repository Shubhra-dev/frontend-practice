import React, { useRef, useState } from "react";

export default function CounterRefDemo() {
  const renderCount = useRef(0);
  const [value, setValue] = useState("");

  renderCount.current++; // প্রতিবার render এ বাড়বে

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Counter with useRef</h2>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
        className="border p-2 rounded"
      />
      <p>Render Count: {renderCount.current}</p>
    </div>
  );
}
