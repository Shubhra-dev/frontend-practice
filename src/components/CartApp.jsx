import React, { useReducer } from "react";

// 1. Reducer function
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.item],
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };

    case "INCREASE_QTY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, qty: item.qty + 1 } : item
        ),
      };

    case "DECREASE_QTY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id && item.qty > 1
            ? { ...item, qty: item.qty - 1 }
            : item
        ),
      };

    default:
      return state;
  }
}

// 2. Initial State
const initialState = {
  items: [
    { id: 1, name: "Shoes", price: 50, qty: 1 },
    { id: 2, name: "T-shirt", price: 20, qty: 2 },
  ],
};

// 3. Component
export default function CartApp() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🛒 Shopping Cart</h1>

      <ul className="space-y-2">
        {state.items.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center border p-2 rounded"
          >
            <span>
              {item.name} (${item.price}) x {item.qty}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => dispatch({ type: "DECREASE_QTY", id: item.id })}
                className="px-2 py-1 bg-gray-300 rounded"
              >
                -
              </button>
              <button
                onClick={() => dispatch({ type: "INCREASE_QTY", id: item.id })}
                className="px-2 py-1 bg-gray-300 rounded"
              >
                +
              </button>
              <button
                onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.id })}
                className="px-2 py-1 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-4">Total: ${total}</h2>

      <button
        onClick={() =>
          dispatch({
            type: "ADD_ITEM",
            item: { id: Date.now(), name: "New Item", price: 10, qty: 1 },
          })
        }
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        Add Random Item
      </button>
    </div>
  );
}
