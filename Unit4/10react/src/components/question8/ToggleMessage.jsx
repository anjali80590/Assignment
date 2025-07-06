import React, { useReducer } from "react";

const reducer = (state) => ({ isVisible: !state.isVisible });

export default function ToggleMessage() {
  const [state, dispatch] = useReducer(reducer, { isVisible: false });

  return (
    <div style={{ padding: "2rem" }}>
      <button onClick={dispatch}>Toggle Message</button>
      {state.isVisible && <p>Hello, World!</p>}
    </div>
  );
}
