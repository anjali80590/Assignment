// 5 EXLPORRING USEFFFECT HOOKS
// # Toggle Theme with Props and Conditional Styling
// # Build a React app with a ThemeApp component to toggle light/dark themes using useState, and a reusable ThemedBox component styled via props, with theme persistence in localStorage using useEffect.

// DONE ALREADY

// # Daily Quote Generator (Auto-refresh + Button)
// # Create a React quote viewer that fetches from https://api.quotable.io/random, auto-refreshes every 30 seconds using useEffect, includes a "Get New Quote" button, and shows a loading indicator during fetch.
// import React, { useState } from "react";
// function Question5() {
//   const [color, setColor] = useState("white");
//   const colors = ["red", "green", "blue", "orange"];
//   const changeColor = () => {
//     const index = Math.floor(Math.random() * colors.length);
//     setColor(colors[index]);
//   };
//   return (
//     <div style={{ height: "100vh", width: "100vw", background: color }}>
//       <button onClick={changeColor}>Change Background</button>
//       <h4>{color}</h4>
//     </div>
//   );
// }

// export default Question5;



// # Fetch and Display User Profiles
// # Develop a React app that fetches user profiles from https://jsonplaceholder.typicode.com/users using useEffect, displays them via a reusable UserCard component, and includes loading, error, and name-based search filter

// import React, { useEffect, useState } from "react";
// function Question5() {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState("");
//   const [debouncedValue, setDebouncedValue] = useState("");
//   const [filteredData, setFilteredData] = useState([]);
//   async function fetchData() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let result = await response.json();
//     setData(result);
//     setFilteredData(result);
//   }
//   useEffect(() => {
//     fetchData();
//   }, []);

//   // Debounce effect
//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(search);
//     }, 1000); // 1 second delay

//     return () => clearTimeout(handler);
//   }, [search]);

//   // Filter effect based on debouncedValue
//   useEffect(() => {
//     if (debouncedValue.trim()) {
//       const result = data.filter((user) =>
//         user.name.toLowerCase().includes(debouncedValue.toLowerCase())
//       );
//       setFilteredData(result);
//     } else {
//       setFilteredData(data);
//     }
//   }, [debouncedValue, data]);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search here"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       <ul>
//         {filteredData.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Question5;









// # React Stopwatch with Sound Trigger
// # Implement a React stopwatch using useState and useEffect, with Start/Stop buttons, and trigger a sound or console message at 10 seconds using setInterval, ensuring proper interval cleanup.
// import React, { useRef, useState } from "react";
// function Question5() {
//   let [timer, setTimer] = useState(0);
//   let [running, setRunning] = useState(false);
//   // let[intervalId,setIntervalId]=useState(null);
//   let intervalId = useRef(null);

//   let startTimer = () => {
//     if (!running) {
//       setRunning(true);
//     }
//     intervalId.current = setInterval(() => {
//       setTimer((prev) => prev + 1);
//     }, 1000);
//   };

//   let stopTimer = () => {
//     clearInterval(intervalId.current);
//     setRunning(false);
//   };
//   let ResetTimer = () => {
//     clearInterval(intervalId.current);
//     setRunning(false);
//     setTimer(0);
//   };
//   return (
//     <div>
//       <button onClick={startTimer}>Start</button>
//       <button onClick={ResetTimer}>Reset</button>
//       <button onClick={stopTimer}>Stop</button>
//       <h3>{timer}</h3>
//     </div>
//   );
// }

// export default Question5;

import React, { useState } from 'react'

function Question5() {
    let[show,setShow]=useState(false);
    let bio =
      "i am bio his is about me. I love coding, building React apps, and exploring new technologies. React is awesome because it makes UI development easy and fun. Learning every da";
    let displayText=bio;
    if(!show && displayText.length>100){
        displayText=bio.slice(0,100)+'..'
    }
  return (
    <div>
       {displayText}
       {bio.length>100 && (
        <button onClick={()=>setShow(!show)}>
            {show?'read less':'read more'}
        </button>
       )}
    </div>
  )
}

export default Question5