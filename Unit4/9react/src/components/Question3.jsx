import React, { useRef, useState } from "react";

export default function Question3() {
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);

  const handleClick = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "#e0f7fa";
    setFocused(true);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <input ref={inputRef} placeholder="Type here" />
      <button onClick={handleClick} style={{ marginLeft: "10px" }}>
        Focus Input
      </button>
      {focused && <p>Focused!</p>}
    </div>
  );
}
