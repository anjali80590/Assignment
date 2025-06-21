// import React, { useState } from 'react'

// function Question11() {
//     let[color,setColor]=useState('Green');
//   function toggleBackground(){
//     setColor(color=='Green'?'Yellow':'Green')
//   }
//   return (
//     <div style={{ height: "100vh", backgroundColor: color }}>
//       <span>Text Message: {color} </span> <br />
//       <button style={{color:color}} onClick={toggleBackground}>{color}</button>
//     </div>
//   );
// }

// export default Question11

// L0 - Implementing Conditional Styling

// Problem Statement:
// Create a React component that displays a button and a text message. The button's background color should toggle between green and yellow each time it is clicked. The text message below the button should display the current background color of the button (e.g., "Current Color: Green" or "Current Color: Yellow").

// Requirements:

// Use inline styling for the button.
// Display the button's current color as a label on the button (e.g., "Color: Green" or "Color: Yellow").
// Ensure the text on the button is clearly visible against the background color.
// Display a text message below the button that reflects the button's current background color.

import React, { useState } from 'react'

function Question11() {
  let[color,setColor]=useState('green');
 function handleColor(){
  setColor(color=='green'?'yellow':'green')
 }
  return (
    <div style={{height:"100vh", background:color}}>
      <button onClick={handleColor}>Change background</button>
      <span>Current Color : {color}</span>
    </div>
  )
}

export default Question11;