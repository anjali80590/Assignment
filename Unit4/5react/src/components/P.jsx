// import React, { useEffect } from "react";
// import { useState } from "react";
// function P() {
//   let [time, setTime] = useState(0);
//   let [running, setRunning] = useState(false);

//   useEffect(() => {
//     let intervalid;

//     if (running) {
//       intervalid = setInterval(() => {
//         setTime((prev) => prev + 1);
//       }, 1000);
//     }
//     return () => clearInterval(intervalid);
//   }, [running]);

//   function start() {
//     setRunning(true);
//   }
//   function stop() {
//     setRunning(false);
//   }
//   function reset() {
//     setRunning(false);
//     setTime(0);
//   }
//   return (
//     <div>
//       <button onClick={start}>Start</button>
//       <span>{time}</span>
//       <button onClick={stop}>Stop</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }

// export default P;


// TOGGLE THEME LOCAL STORAGE 
// import React, { useEffect, useState } from 'react'
// function P() {
//     let[theme,setTheme]=useState(localStorage.getItem('theme')||'light');
//    function handleTheme(){
//     setTheme(theme=='light'?'dark':"light")
//    }
//    useEffect(()=>{
//     localStorage.setItem('theme',theme);
//    },[theme])
//   return (
//     <div>
//         <button onClick={handleTheme}>Theme</button>
//         {theme}
//     </div>
//   )
// }
// export default P;



// RANDOME COLOR GENERATEOR  RANDOME QUOTE GENERATOR 
// import React, { useState, useEffect } from "react";
// function P() {
//   const [color, setColor] = useState("white");
//   const [running, setRunning] = useState(false);
//   const colors = ["red", "green", "blue", "pink", "orange"];
//   useEffect(() => {
//     let id;
//     if (running) {
//       id = setInterval(() => {
//         const i = Math.floor(Math.random() * colors.length);
//         setColor(colors[i]);
//       }, 1000);
//     }
//     return () => clearInterval(id); 
//   }, [running]);
//   return (
//     <div style={{ backgroundColor: color, height: "100vh" }}>
//       <button onClick={() => setRunning(true)}>Start</button>
//       <button onClick={() => setRunning(false)}>Stop</button>
//     </div>
//   );
// }
// export default P;




// import React, { useState } from "react";
// function ProgressBar() {
//   const [progress, setProgress] = useState(0);
//   const handleAdd = () => {
//     setProgress((prev) => (prev < 100 ? prev + 10 : 100)); // max 100
//   };
//   return (
//     <div>
//       <div style={{ width: "200px", height: "20px", border: "1px solid #000" }}>
//         <div
//           style={{
//             width: `${progress}%`,
//             height: "100%",
//             background: "green",
//           }}
//         />
//       </div>
//       <p>{progress}%</p>
//       <button onClick={handleAdd}>Add</button>
//     </div>
//   );
// }

// export default ProgressBar;
// import React, { useState, useEffect } from "react";
// function ProgressBar() {
//   const [progress, setProgress] = useState(0);
//   useEffect(() => {
//     if (progress < 100) {
//       const interval = setInterval(() => {
//         setProgress((prev) => (prev < 100 ? prev + 10 : 100));
//       }, 1000); // increase every 1 second
//       return () => clearInterval(interval);
//     }
//   }, [progress]);
//   return (
//     <div>
//       <div style={{ width: "200px", height: "20px", border: "1px solid #000" }}>
//         <div
//           style={{
//             width: `${progress}%`,
//             height: "100%",
//             background: "green",
//           }}
//         />
//       </div>
//       <p>{progress}%</p>
//     </div>
//   );
// }
// export default ProgressBar;



// import React, { useState } from "react";
// function StarRating() {
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);
//   return (
//     <div style={{ fontSize: "40px" }}>
//       {[1, 2, 3, 4, 5].map((star) => (
//         <span
//           key={star}
//           style={{
//             cursor: "pointer",
//             color: star <= (hover || rating) ? "gold" : "gray",
//           }}
//           onClick={() => setRating(star)}
//           onMouseEnter={() => setHover(star)}
//           onMouseLeave={() => setHover(0)}
//         >
//           ★
//         </span>
//       ))}
//       <p>Your Rating: {rating}</p>
//     </div>
//   );
// }

// export default StarRating;


// import React, { useState } from "react";
// function Autocomplete() {
//   const items = ["Apple", "Banana", "Grapes", "Orange", "Pineapple", "Mango"];
//   const [inputValue, setInputValue] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const handleChange = (e) => {
//     const value = e.target.value;
//     setInputValue(value);
//     if (value) {
//       const filtered = items.filter((item) =>
//         item.toLowerCase().startsWith(value.toLowerCase())
//       );
//       setSuggestions(filtered);
//     } else {
//       setSuggestions([]);
//     }
//   };
//   const handleSelect = (item) => {
//     setInputValue(item);
//     setSuggestions([]);
//   };
//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleChange}
//         placeholder="Search..."
//       />
//       {suggestions.length > 0 && (
//         <ul style={{ padding: 0, margin: 0 }}>
//           {suggestions.map((item, index) => (
//             <li
//               key={index}
//               onClick={() => handleSelect(item)}
//               style={{ cursor: "pointer" }}
//             >
//               {item}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default Autocomplete;





// import React, { useEffect, useState } from "react";
// function InfiniteScroll() {
//   const [items, setItems] = useState([]);
//   const [page, setPage] = useState(1);

//   const fetchData = () => {
//     const newItems = Array.from(
//       { length: 10 },
//       (_, i) => `Item ${i + 1 + (page - 1) * 10}`
//     );
//     setItems((prev) => [...prev, ...newItems]);
//   };
//   useEffect(() => {
//     fetchData();
//   }, [page]);

//   const handleScroll = () => {
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
//       setPage((prev) => prev + 1);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div>
//       {items.map((item, index) => (
//         <div
//           key={index}
//           style={{ padding: "10px", borderBottom: "1px solid #ccc" }}
//         >
//           {item}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default InfiniteScroll;



// TRAFIC LIGHT
// import React, { useEffect, useState } from "react";

// function TrafficLight() {
//   const colors = ["red", "green", "yellow"];
//   const [active, setActive] = useState(0); // index of active color

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActive((prev) => (prev + 1) % colors.length);
//     }, 2000); // change every 2 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       style={{
//         width: "100px",
//         margin: "50px auto",
//         padding: "10px",
//         background: "#333",
//         borderRadius: "10px",
//       }}
//     >
//       {colors.map((color, index) => (
//         <div
//           key={color}
//           style={{
//             width: "60px",
//             height: "60px",
//             margin: "10px auto",
//             borderRadius: "50%",
//             background: index === active ? color : "#555",
//           }}
//         />
//       ))}
//     </div>
//   );
// }

// export default TrafficLight;



// search with pagination 

// import React, { useState } from "react";
// function ModalExample() {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div>
//       <button onClick={() => setIsOpen(true)}>Open Modal</button>

//       {isOpen && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0,0,0,0.5)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <div
//             style={{
//               background: "#fff",
//               padding: "20px",
//               borderRadius: "8px",
//               minWidth: "250px",
//               textAlign: "center",
//             }}
//           >
//             <h2>Modal Content</h2>
//             <p>This is a simple modal.</p>
//             <button onClick={() => setIsOpen(false)}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ModalExample;



// import React, { useState } from "react";
// function Navbar() {
//   const [open, setOpen] = useState(false);
//   return (
//     <nav style={{ background: "#333", padding: "10px", color: "#fff" }}>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <h2>Logo</h2>
//         <div
//           onClick={() => setOpen(!open)}
//           style={{ cursor: "pointer", fontSize: "24px", display: "none" }}
//           className="hamburger"
//         >
//           ☰
//         </div>
//         <ul
//           style={{ display: "flex", listStyle: "none", gap: "15px" }}
//           className="menu"
//         >
//           <li>Home</li>
//           <li>About</li>
//           <li>Services</li>
//           <li>Contact</li>
//         </ul>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <ul
//           style={{
//             listStyle: "none",
//             padding: "10px",
//             background: "#444",
//             display: "flex",
//             flexDirection: "column",
//             gap: "10px",
//           }}
//           className="mobile-menu"
//         >
//           <li>Home</li>
//           <li>About</li>
//           <li>Services</li>
//           <li>Contact</li>
//         </ul>
//       )}
//     </nav>
//   );
// }

// export default Navbar;
// @media (max-width: 600px) {
//   .menu {
//     display: none !important;
//   }
//   .hamburger {
//     display: block !important;
//   }
// }


// darkmode challege 
// digital clock 
// drag and drop 
// acoordioan 
// reac toast notifcation 
// react otp 
// carousel 
// pagination 
// react filte explorer 
// nested commetns 
// faq 
// emi callucaltior bmi 
// undoable counter 
// custom modal overlay 





import React, { useState } from 'react'

function P() {
    let [blog,setBlog]=useState('set blog to display');
const blogs = [
  {
    title: "Understanding Closures in JavaScript",
    content:
      "A closure is formed when an inner function remembers the variables from its outer function's scope even after the outer function has returned.",
  },
  {
    title: "Why Use JSON.stringify and JSON.parse?",
    content:
      "localStorage only stores strings. Use JSON.stringify() to save objects and JSON.parse() to retrieve them in original form.",
  },
  {
    title: "React useEffect Simplified",
    content:
      "useEffect runs side effects after rendering. Common use cases include fetching data, updating the DOM, and syncing with localStorage.",
  },
  {
    title: "Debounce vs Throttle in JS",
    content:
      "Debounce delays execution until input stops, while Throttle ensures execution at regular intervals, even during continuous events like scroll.",
  },
  {
    title: "Difference Between var, let, and const",
    content:
      "var is function-scoped and hoisted, let and const are block-scoped. const cannot be reassigned, let can.",
  },
  {
    title: "What is a Pure Function?",
    content:
      "A pure function always returns the same result for the same inputs and does not cause side effects.",
  },
  {
    title: "Promise.all Explained",
    content:
      "Promise.all runs multiple promises in parallel and resolves when all succeed, or rejects if any one fails.",
  },
  {
    title: "What is Optional Chaining?",
    content:
      "Optional chaining (?.) allows safe access to deeply nested properties without throwing an error if a property doesn't exist.",
  },
  {
    title: "React useState Basics",
    content:
      "useState is a React hook for adding state to functional components. It returns the current state and a function to update it.",
  },
  {
    title: "What is Event Bubbling?",
    content:
      "Event bubbling is when an event propagates from the target element up to its ancestors, triggering their event handlers.",
  },
];

  return (
    <div>
      {blogs.map((blog) => (
        <div>
          <div onClick={() => setBlog(blog.content)}>{blog.title} </div>
        </div>
      ))}
      <div>{blog}</div>
    </div>
  );
}

export default P