import { useState } from "react";

function Question2({ label = "" }) {
  const [isOn, setIsOn] = useState(false);

  return (
    <div style={{ padding: 10, border: "1px solid black", marginBottom: 10 }}>
      <button
        onClick={() => setIsOn(!isOn)}
        style={{
          color: isOn ? "green" : "red",
          fontWeight: "bold",
          marginRight: 10,
        }}
      >
        {isOn ? "ON" : "OFF"}
      </button>
      {label && <span>{label}</span>}
    </div>
  );
}

export default Question2;
