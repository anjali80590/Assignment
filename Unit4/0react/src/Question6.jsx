// # 1Counter Component with Initial Value from Props
// # Create a Counter component in React that accepts an initialValue prop, displays the current count, allows increment/decrement (but never below 0), and disables the decrement button when count is 0.

// import React, { useState } from 'react'

// function Practice() {
//     let[count,setCount]=useState(0);
//     function handleIncrement(){
//       setCount((prev)=>prev+1)
//     }
//     function handleDecrement(){
//        setCount((prev)=>prev-1)
//     }
//   return (
//     <div>
//         <button onClick={handleIncrement}>Increment</button>
//         <h4>{count}</h4>
//         <button disabled={count==0} onClick={handleDecrement}>Decrement</button>
//     </div>
//   )
// }

// export default Practice








// #  2. Toggle Button Component
// # Build a ToggleButton React component that toggles between "ON" and "OFF" states on click, displays the state in green when ON and red when OFF using conditional styling.

// import React, { useState } from 'react'

// function Practice() {
//   let[toggleButton,setToggleButton]=useState(true)
//   function handleToggle(){
//     setToggleButton(!toggleButton);
//   }
//   return (
//     <div>
//       <button onClick={handleToggle}>Switch</button>
//       <h2 style={{color:toggleButton?'red':'green'}}>{toggleButton ? "ON" : "OFF"}</h2>
//     </div>
//   );
// }

// export default Practice



// # 3. React Profile Card Component Using Props
// # Create a reusable ProfileCard component in React that displays a user's name, age, and bio (truncate bio >100 chars with “… Read More”), applies default props if not provided, and uses CSS or any styling framework.

// import React, { useState } from "react";

// function Practice() {
//   const bio =
//     "This is about me. I love coding, building React apps, and exploring new technologies. React is awesome because it makes UI development easy and fun. Learning every day!";

//   const [show, setShow] = useState(false);

//   // Decide what text to display
//   let displayText = bio;
//   if (!show && bio.length > 100) {
//     displayText = bio.slice(0, 100) + "...";
//   }

//   return (
//     <div>
//       <p>{displayText}</p>

//       {bio.length > 100 && (
//         <button onClick={() => setShow(!show)}>
//           {show ? "Read Less" : "Read More"}
//         </button>
//       )}
//     </div>
//   );
// }

// export default Practice;


// #  4. AutoCorrect App using React, useState, and Props Only
// # Build an AutoCorrectApp React component that uses a corrections dictionary to replace misspelled words in real-time from user input and show the corrected preview, with an optional reusable CorrectedText component and correction count

// import React, { useState } from "react";

// function AutoCorrectApp() {
//   const [text, setText] = useState("");
//   const corrections = { teh: "the", recieve: "receive", adress: "address" };

//   const correctText = (input) => {
//     return input
//       .split(" ")
//       .map((word) => (corrections[word] ? corrections[word] : word))
//       .join(" ");
//   };

//   return (
//     <div>
//       <h2>AutoCorrect App</h2>
//       <textarea
//         rows="4"
//         cols="40"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Type something..."
//       />
//       <h4>Corrected Text:</h4>
//       <p>{correctText(text)}</p>
//     </div>
//   );
// }

// export default AutoCorrectApp;


// READ MORE 
// AUTOCORRECT 
