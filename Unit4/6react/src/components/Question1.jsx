import { useState } from "react";

function Question1({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);

  return (
    <div style={{ padding: 10, border: "1px solid black", marginBottom: 10 }}>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button
        onClick={() => count > 0 && setCount(count - 1)}
        disabled={count === 0}
      >
        Decrement
      </button>
    </div>
  );
}

export default Question1;
