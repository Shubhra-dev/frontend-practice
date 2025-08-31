import React, { useRef, useEffect } from "react";

export default function AutoFocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Component mount হলে input এ auto-focus হবে
    inputRef.current.focus();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Auto Focus Input</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type here..."
        className="border p-2 rounded"
      />
    </div>
  );
}
