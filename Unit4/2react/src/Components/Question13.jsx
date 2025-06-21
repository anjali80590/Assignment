import React from "react";

function Question13({ name, cost }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 0",
        borderTop: "1px solid #eee",
        gap: "20px",
        fontFamily: "Arial",
      }}
    >
      <div style={{ flex: 1, fontWeight: "bold" }}>{name}</div>

      <div style={{ flex: 2 }}>
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            color: "#444",
          }}
        >
          <li>✅ 1 lorem ipsum</li>
          <li>✅ Lorem, ipsum dolor.</li>
          <li>✅ Monthly Updates</li>
        </ul>
      </div>
      <div style={{ flex: 1, fontSize: "20px", fontWeight: "bold" }}>
        {cost}
      </div>
      <button
        style={{
          backgroundColor: "#8b5cf6",
          color: "#fff",
          border: "none",
          padding: "8px 16px",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    </div>
  );
}

export default Question13;
