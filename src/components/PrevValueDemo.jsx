import React, { useState, useEffect, useRef } from "react";

export default function PrevValueDemo() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Previous Value Tracker</h2>
      <p>Current: {count}</p>
      <p>Previous: {prevCount.current}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Increment
      </button>
    </div>
  );
}
