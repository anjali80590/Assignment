import React, { useState, useEffect } from "react";

function TimerInputForm({ onAddPost }) {
  const [timer, setTimer] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const id = setInterval(() => setTimer((prev) => prev + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const handleAdd = () => {
    if (!title || !body) return;
    onAddPost({
      id: Date.now(),
      title,
      body,
      verifyPost: false,
    });
    setTitle("");
    setBody("");
  };

  return (
    <div>
      <h2>Timer: {timer}s</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={handleAdd}>Add Post</button>
    </div>
  );
}

export default TimerInputForm;
