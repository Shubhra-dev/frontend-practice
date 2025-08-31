import React, { useRef } from "react";

// Custom Input Component
const CustomInput = React.forwardRef((props, ref) => {
  return <input ref={ref} {...props} className="border p-2 rounded w-full" />;
});

// Parent Component
export default function ForwardRefDemo() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-lg font-bold">forwardRef Demo</h2>
      <CustomInput ref={inputRef} placeholder="Type here..." />
      <button
        onClick={handleFocus}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Focus Input
      </button>
    </div>
  );
}
