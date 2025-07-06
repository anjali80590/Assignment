import React, { useReducer } from "react";
import CountrySearch from "./CountrySearch";

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return state === "light" ? "dark" : "light";
    default:
      return state;
  }
};

export default function Dashboard() {
  const [theme, dispatch] = useReducer(themeReducer, "light");

  const style = {
    background: theme === "dark" ? "#222" : "#f5f5f5",
    color: theme === "dark" ? "#fff" : "#000",
    minHeight: "100vh",
    padding: "1rem",
  };

  return (
    <div style={style}>
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        Toggle Theme
      </button>
      <CountrySearch />
    </div>
  );
}
