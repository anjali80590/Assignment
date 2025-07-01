import React, { useState, useEffect } from "react";

function Question4() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [target, setTarget] = useState(10);

  useEffect(() => {
    let timer;

    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime + 1;
          if (newTime === target) {
            console.log("🎵 Play sound");
          }
          return newTime;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running, target]);

  return (
    <div style={{ padding: 20 }}>
      <h3>Time: {time}s</h3>

      <input
        type="number"
        value={target}
        onChange={(e) => setTarget(Number(e.target.value))}
        placeholder="Set target time"
        style={{ marginRight: 10 }}
      />

      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)} style={{ marginLeft: 5 }}>
        Stop
      </button>
      <button
        onClick={() => {
          setTime(0);
          setRunning(false);
        }}
        style={{ marginLeft: 5 }}
      >
        Reset
      </button>
    </div>
  );
}

export default Question4;
