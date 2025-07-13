import React from "react";
import useTimer from "./useTimer";
function Timer() {
  const { timer, isRunning, startTimer, stopTimer, resetTimer } = useTimer();

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Timer: {timer} seconds</h2>
      <p>Status: {isRunning ? "Running" : "Stopped"}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;




