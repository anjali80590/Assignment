import React from "react";
import Question1 from "./components/Question1";
import Question2 from "./components/Question2";
import Question3 from "./components/Question3";
import Question4 from "./components/Question4";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Q1: Counter</h2>
      <Question1 initialValue={5} />

      <h2>Q2: Toggle Button</h2>
      <Question2 label="Power Mode" />

      <h2>Q3: Profile Card</h2>
      <Question3
        name="Anjali Yadav"
        age={20}
        bio="Anjali is a passionate frontend developer with strong interest in user-friendly interfaces and clean design systems. She is learning full stack development."
      />

      <h2>Q4: AutoCorrect App</h2>
      <Question4 />
    </div>
  );
}

export default App;
