import React, { useReducer } from "react";

const initialState = { theme: "light" };

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { theme: state.theme === "light" ? "dark" : "light" };
    default:
      throw new Error("Invalid action type");
  }
};

export default function ThemeToggle() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const themeStyle = {
    backgroundColor: state.theme === "light" ? "#fff" : "#333",
    color: state.theme === "light" ? "#000" : "#fff",
    padding: "2rem",
    textAlign: "center",
  };

  return (
    <div style={themeStyle}>
      <h2>Current Theme: {state.theme}</h2>
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        Toggle Theme
      </button>
    </div>
  );
}
