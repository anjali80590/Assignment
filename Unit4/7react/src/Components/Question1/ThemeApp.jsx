import React, { useState, useEffect } from "react";
import ThemedBox from "./ThemedBox";

function ThemeApp() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) setTheme(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
      <ThemedBox theme={theme} />
      <ThemedBox theme={theme} />
      <ThemedBox theme={theme} />
    </div>
  );
}

export default ThemeApp;
