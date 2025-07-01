import React, { useState } from "react";

// Common corrections
const corrections = {
  teh: "the",
  recieve: "receive",
  adress: "address",
  wierd: "weird",
  thier: "their",
};

function Question4() {
  const [inputText, setInputText] = useState("");

  // Split text into words
  const words = inputText.split(" ");
  let count = 0;

  // Replace misspelled words
  const correctedWords = words.map((word) => {
    if (corrections[word]) {
      count++;
      return corrections[word];
    }
    return word;
  });

  const correctedText = correctedWords.join(" ");

  return (
    <div style={{ border: "1px solid black", padding: "10px", width: "300px" }}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type something..."
        style={{ width: "100%", marginBottom: "10px" }}
      />
      <p>
        <strong>Corrected:</strong> {correctedText}
      </p>
      <p>
        <strong>Corrections Made:</strong> {count}
      </p>
    </div>
  );
}

export default Question4;
