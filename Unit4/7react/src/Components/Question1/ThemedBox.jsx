import React from "react";

function ThemedBox({ theme }) {
  const style = {
    backgroundColor: theme === "light" ? "#eee" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: 20,
    margin: 10,
    borderRadius: 10,
  };
  return <div style={style}>This is a {theme} themed box</div>;
}

export default ThemedBox;
