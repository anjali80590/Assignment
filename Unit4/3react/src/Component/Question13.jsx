import React, { useState } from "react";

function Question13() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  function handleIncre() {
    const newCount = count + 1;
    setCount(newCount);
    setMessage(newCount === 10 ? "Goal Reached" : "");
  }

  function handleDecre() {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      setMessage(newCount === 10 ? "Goal Reached" : "");
    }
  }

  return (
    <div>
      <button onClick={handleIncre}>Increment</button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button onClick={handleDecre}>Decrement</button>
      <div>{message}</div>
    </div>
  );
}

export default Question13;
