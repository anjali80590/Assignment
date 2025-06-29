import React, { useEffect, useState } from "react";

function Question4() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [target, setTarget] = useState(10);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => {
          if (prev + 1 === target) {
            console.log("🎵 Play sound");
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, target]);

  return (
    <div style={{ padding: 20 }}>
      <p>Time: {time}s</p>
      <input
        type="number"
        value={target}
        onChange={(e) => setTarget(Number(e.target.value))}
      />
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button
        onClick={() => {
          setTime(0);
          setIsRunning(false);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Question4;
