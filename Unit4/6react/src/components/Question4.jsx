import { useState } from "react";

const corrections = {
  teh: "the",
  recieve: "receive",
  adress: "address",
  wierd: "weird",
  thier: "their",
};

function CorrectedText({ text }) {
  const words = text.split(" ");
  let correctionCount = 0;

  const corrected = words.map((word) => {
    if (corrections[word]) {
      correctionCount++;
      return corrections[word];
    }
    return word;
  });

  return (
    <>
      <p>Preview: {corrected.join(" ")}</p>
      <p>Corrections Made: {correctionCount}</p>
    </>
  );
}

function Question4() {
  const [inputText, setInputText] = useState("");

  return (
    <div style={{ padding: 10, border: "1px solid black", marginBottom: 10 }}>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type something..."
      />
      <CorrectedText text={inputText} />
    </div>
  );
}

export default Question4;
