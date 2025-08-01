// import React, { useEffect, useState } from "react";

// function Practice() {
//   let [data, setData] = useState([]);
//   let [currentPage, setCurrentPage] = useState(1);
//   let [currentData, setCurrentData] = useState([]);
//   let [search, setSearch] = useState("");
//   let pages = 10;

//   async function fetchData() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     let result = await response.json();
//     setData(result);
//   }
//   useEffect(() => {
//     fetchData();
//   }, []);

//     useEffect(()=>{
//         let timer=setTimeout(()=>{
//             setDebounce(search);
//         },1000)
//         return ()=>clearTimeout(timer);
//     },[search])
//   useEffect(() => {
//     let result = data.filter((todo) =>
//       todo.title.toLowerCase().includes(search.toLowerCase())
//     );
//     let startPage = (currentPage - 1) * pages;
//     let endPage = startPage + pages;
//     setCurrentData(result.slice(startPage, endPage));
//   }, [data, search, currentPage]);

//   let totalPages = Math.ceil(
//     data.filter(
//       (todo) =>
//         todo.title.toLowerCase().includes(search.toLowerCase()).length / pages
//     )
//   );

//   let to;
//   return (
//     <div>
//       <h1>Todo Pagination</h1>
//       <input
//         placeholder="search here"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       {currentData.map((todo) => (
//         <li id={todo.id}>
//           <div> {todo.title}</div>
//         </li>
//       ))}
//       <button
//         disabled={currentPage === 1}
//         onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
//       >
//         Prev
//       </button>
//       <button
//         onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
//       >
//         Next
//       </button>
//     </div>
//   );
// }

// export default Practice;

// stores the previous count using useRef, which updates after each render via useEffect.
// import React, { useEffect, useRef, useState } from 'react'
// function Practice() {
//     let[count,setCount]=useState(0);
//     let prev=useRef(0);
//     useEffect(()=>{
//            prev.current = count;
//         //    setprev(count) cause rerender everytime count changes
//     },[count])
//     function handleCount(){
//         setCount((prev)=>prev+1)  }
//   return (
//     <div>
//         <button onClick={handleCount}>Incre Count</button>
//         <h1>{count}</h1>
//         <h2>{prev.current}</h2>
//     </div>
//   )
// }
// export default Practice

// import React from "react";

// function Practice() {
//   let [filterBy, setFilterBy] = useState("all");
//   let [filteredProducts, setFilteredProducts] = useState([]);
//   const products = [
//     { id: 1, name: "Laptop", category: "Electronics" },
//     { id: 2, name: "T-Shirt", category: "Clothing" },
//     { id: 3, name: "Rice", category: "Grocery" },
//     { id: 4, name: "Headphones", category: "Electronics" },
//     { id: 5, name: "Jeans", category: "Clothing" },
//   ];

//   useEffect(() => {
//     let result = [...products];

//     if (filterBy == "all") {
//       result = products;
//     } else if (filterBy == "electronics") {
//       result = products.filter(
//         (product) => product.category.toLowerCase() == filterBy
//       );
//     }

//     setFilteredProducts(result);
//   }, [filterBy, products]);

//   return (
//     <div>
//       <select value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
//         <option value="all">all</option>
//         <option value="electronics">electronics</option>
//         <option value="clothing">clothing</option>
//         <option value="grocery">Grocery</option>
//       </select>

//       {filteredProducts.map((product) => (
//         <div>
//           <div>
//             {product.name} {product.category}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Practice;

// import React from 'react'
// function Practice() {
//     let[search,setSearch]=useState('');
//     let [data,setData]=useState([]);
//     let[debounce,setDebounce]=useState('')
//     const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];

//     useEffect(()=>{
//         let timer=setTimeout(()=>{
//             setDebounce(search);
//         },1000)
//         return ()=>clearTimeout(timer)
//     })

//     useEffect(()=>{
//         let result=names
//         if(search){
//             result = result.filter((name) =>
//               name.toLowerCase().includes(search.toLowerCase())
//             );
//         }
//            setData(result);

//     },[debounce])

//   return (
//     <div>
//         <input value={search} placeholder="search here" onChange={(e)=>setSearch(e.target.value)}/>
//         {data.map((name)=>(
//             <li>{name}</li>
//         ))}
//     </div>
//   )
// }

// export default Practice
// import React, { useState, useEffect } from "react";

// function DebounceSearch() {
//   const [search, setSearch] = useState("");
//   const [debouncedSearch, setDebouncedSearch] = useState("");

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDebouncedSearch(search);
//     }, 1000); // 1 second debounce delay

//     return () => clearTimeout(timer); // cleanup previous timer
//   }, [search]);

//   return (
//     <div>
//       <input
//         value={search}
//         placeholder="Type to search..."
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       <p>Current Input: {search}</p>
//       <p>Debounced Value: {debouncedSearch}</p>
//     </div>
//   );
// }

// export default DebounceSearch;

// import React from 'react'

// function Practice() {
//         const users = [
//           { id: 1, name: "Alice", age: 25 },
//           { id: 2, name: "Bob", age: 30 },
//           { id: 3, name: "Charlie", age: 22 },
//           { id: 4, name: "David", age: 35 },
//         ];

//     let[data,setData]=useState(users)

//    let sortByAge = () => {
//      let sortedData = [...users].sort((a, b) => a.age - b.age);
//      setData(sortedData);
//    };
//    useEffect(()=>{
//     setData(users);
//    },[])

//   return (
//     <div>
//       <button onClick={sortByAge}>sort by age</button>
//       {data.map((user)=>(
//         <li>{user.name} {user.age}</li>
//       ))}
//     </div>
//   )
// }

// export default Practice

// import React from 'react'

// function Practice() {

//     const [tasks,setTasks] = useState([
//       { id: 1, title: "Learn React" },
//       { id: 2, title: "Practice DSA" },
//       { id: 3, title: "Build a Project" },
//     ])
//     function DeleteTask(id){
//      setTasks((prev)=>prev.filter((task)=>task.id!==id))
//     }

//   return (
//     <div>
//        {tasks.map((task)=>(
//    <div>
//          <li>{task.title}</li>
//         <button onClick={()=>DeleteTask(task.id)}>Delete</button>
//         </div>
//        ))}
//     </div>
//   )
// }

// export default Practice

// import React from "react";

// function Practice() {
//   let [currentPage, setCurrentPage] = useState(1);
//   let [currentData, setCurrentData] = useState([]);
//   let [data, setData] = useState([]);
//   let [search, setSearch] = useState("");
//   let pages = 10;
//   let[debounce,setDebounce]=useState('')

//   async function fetchData() {
//     try {
//       let response = await fetch("https://jsonplaceholder.typicode.com/todos");
//       let result = await response.json();
//       setData(result);
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   useEffect(() => {
//     fetchData();
//   }, []);

//   useEffect(()=>{
//     let timer=setTimeout(()=>{
//         setDebounce(search);
//         setCurrentPage(1)
//     },1000)
//      return ()=> clearTimeout(timer);
//   },[search])

//   useEffect(() => {
//     let result = data;
//     let start = (currentPage - 1) * 10;
//     let end = start + pages;
//     if (search) {
//       result = result.filter((todo) =>
//         todo.title.toLowerCase().includes(search.toLowerCase())
//       );
//     }
//     setCurrentData(result.slice(start, end));
//   }, [debounce, data, currentPage]);

//   let lengthfil = data.filter((todo) =>
//     todo.title.toLowerCase().includes(search.toLowerCase())
//   ).length;
//   let totalPages = Math.ceil(lengthfil / pages);

//   return (
//     <div>
//       <input
//         placeholder="search here"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       {currentData.map((data) => (
//         <li>{data.title}</li>
//       ))}
//       <button
//         disabled={currentPage == 1}
//         onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
//       >
//         Prev
//       </button>
//       <h4>
//         {currentPage} of {totalPages}
//       </h4>
//       <button
//         disabled={currentPage == totalPages}
//         onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
//       >
//         Next
//       </button>
//     </div>
//   );
// }

// export default Practice;

// function Practice() {
//   const [country, setCountry] = useState("");
//   const [city, setCity] = useState("");

//   const countries = [
//     { country: "USA", cities: ["New York", "Los Angeles", "Chicago"] },
//     { country: "India", cities: ["Delhi", "Mumbai", "Bangalore"] },
//     { country: "Canada", cities: ["Toronto", "Vancouver", "Montreal"] },
//     { country: "Australia", cities: ["Sydney", "Melbourne", "Brisbane"] },
//     { country: "UK", cities: ["London", "Manchester", "Birmingham"] },
//   ];

//   // Find the selected country's cities
//   const selected = countries.find((item) => item.country === country);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h3>Choose Country & City</h3>

//       {/* Country Dropdown */}
//       <select
//         value={country}
//         onChange={(e) => {
//           setCountry(e.target.value);
//           setCity(""); // Reset city when country changes
//         }}
//       >
//         <option value="">Select Country</option>
//         {countries.map((item) => (
//           <option key={item.country} value={item.country}>
//             {item.country}
//           </option>
//         ))}
//       </select>

//       {/* City Dropdown */}
//       <select
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//         disabled={!country} // Disable if no country
//         style={{ marginLeft: "10px" }}
//       >
//         <option value="">Select City</option>
//         {selected &&
//           selected.cities.map((c) => (
//             <option key={c} value={c}>
//               {c}
//             </option>
//           ))}
//       </select>

//       {/* Show Selection */}
//       <p>{country && city ? `You selected: ${country}, ${city}` : ""}</p>
//     </div>
//   );
// }

// export default Practice;

// import React, { useState } from 'react'

// function Practice() {
//     let[time,setTime]=useState(0);
//     let[running,setRunning]=useState(false);
//     let[id,setId]=useState(null);

//     let start=()=>{
//         if(!running){
//             setRunning(true);
//         }
//          id=setInterval(()=>{
//             setTime((prev)=>prev+1)
//         },1000)
//         setId(id);
//     }
//     let stop=()=>{
//         clearInterval(id);
//         setRunning(false)
//     }
//     let reset=()=>{
//         clearInterval(id);
//         setRunning(false);
//         setTime(0)
//     }
//   return (
//     <div>
//         <h3>{time}</h3>
//         <button onClick={reset}>Reset</button>
//         <button onClick={stop}>Stop</button>
//         <button onClick={start}>start</button>
//     </div>
//   )
// }

// export default Practice

// import React, { useEffect, useState } from 'react'
// function Practice() {
//     let[data,setData]=useState([] )
//     let[search,setSearch]=useState('');
//     let[filtered,setFilered]=useState([])
//     async function fetchData(){
//         try{
//             let response=await fetch('https://jsonplaceholder.typicode.com/users')
//             let result=await response.json();
//             setData(result)
//             setFilered(result)
//         }
//         catch(err){
//             console.log(err)
//         }
//     }
//     useEffect(()=>{
//         fetchData()
//     },[])
//     useEffect(()=>{
//         let result=data;
//         if(search){
//             result=result.filter((user)=>user.name.toLowerCase().includes(search.toLowerCase()))
//         }
//         setFilered(result);

//     },[search,data])
//   return (
//     <div>
//         <input value={search} onChange={(e)=>setSearch(e.target.value)}/>
//         {filtered.map((user)=>(
//             <li>{user.name}</li>
//         ))}
//     </div>
//   )
// }
// export default Practice

// import React, { useEffect, useState } from 'react'
// function Practice() {
//     let [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
//     function handleToggle(){
//         setTheme(theme=='light'?'dark':'light')
//     }
//     useEffect(()=>{
//         localStorage.setItem('theme',theme)
//     },[theme])
//   return (
//     <div>
//         <button onClick={handleToggle}>Theme</button>
//         <div>{theme}</div>
//     </div>
//   )
// }
// export default Practice

// # Daily Quote Generator (Auto-refresh + Button)
// # Create a React quote viewer that fetches from https://api.quotable.io/random, auto-refreshes every 30 seconds using useEffect, includes a "Get New Quote" button, and shows a loading indicator during fetch.

// import React, { useEffect, useState } from 'react'

// function Practice() {
//       const quotes = [
//         "Believe in yourself!",
//         "Stay positive, work hard, make it happen.",
//         "Every day is a second chance.",
//         "Push yourself, because no one else is going to do it for you.",
//         "Dream it. Wish it. Do it.",
//       ];
//     let[result,setResult]=useState('')
//       let handleQuotes=()=>{
//       setTimeout(()=>{
//               let i = Math.floor(Math.random() * quotes.length);
//               setResult(quotes[i]);
//       },500)
//       }
//       useEffect(()=>{
//         handleQuotes();
//         let interval=setInterval(handleQuotes,5000);
//         return ()=>clearInterval(interval);
//       },[])
//   return (
//     <div>
//         <button onClick={handleQuotes}>Handle Quotes</button>
//         <h3>{result}</h3>
//     </div>
//   )
// }

// export default Practice

// import React, { useState } from "react";

// function BackgroundChanger() {
//   const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFC300"];
//   const [bgColor, setBgColor] = useState("#fff");

//   function changeColor() {
//     const randomIndex = Math.floor(Math.random() * colors.length);
//     setBgColor(colors[randomIndex]);
//   }

//   return (
//     <div
//       style={{
//         backgroundColor: bgColor,
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         transition: "background 0.5s ease",
//       }}
//     >
//       <h1>Click the button to change background color</h1>
//       <button onClick={changeColor}>Change Color</button>
//     </div>
//   );
// }

// export default BackgroundChanger;

// stopwatch api savetheme quotegenraterandom colorgeneraterandom

// # 3. React Profile Card Component Using Props
// # Create a reusable ProfileCard component in React that displays a user's name, age, and bio (truncate bio >100 chars with “… Read More”), applies default props if not provided, and uses CSS or any styling framework.

// #  4. AutoCorrect App using React, useState, and Props Only
// # Build an AutoCorrectApp React component that uses a corrections dictionary to replace misspelled words in real-time from user input and show the corrected preview, with an optional reusable CorrectedText component and correction count

// import React, { useState } from 'react'
// function Practice() {
//     let[show,setShow]=useState(false);
//     let bio =
//       "Build an AutoCorrectApp React component that uses a corrections dictionary to replace misspelledBuild an AutoCorrectApp React component that uses a corrections dictionary to replace misspelled";
//       let shortBio=bio.length>100?bio.slice(0,100)+'...':bio;
//   return (
//     <div>
//         <p>{show?bio:shortBio}</p>
//         <button onClick={()=>setShow(!show)}>{show?'read less':'read more'}</button>
//     </div>
//   )
// }

// export default Practice

// import React, { useState } from "react";
// function CorrectedText({ text, count }) {
//   return (
//     <div>
//       <h3>Corrected Text:</h3>
//       <p>{text}</p>
//       <p>Corrections Made: {count}</p>
//     </div>
//   );
// }
// function AutoCorrectApp() {
//   const [input, setInput] = useState("");
//   const [correctedText, setCorrectedText] = useState("");
//   const [count, setCount] = useState(0);
//   // Dictonary of common mistakes
//   const corrections = {
//     teh: "the",
//     recieve: "receive",
//     adress: "address",
//     becuase: "because",
//     frnd: "friend",
//   };
//   const handleChange = (e) => {
//     const text = e.target.value;
//     setInput(text);
//     // Split words and check for corrections
//     let correctionCount = 0;
//     const correctedWords = text.split(" ").map((word) => {
//       if (corrections[word]) {
//         correctionCount++;
//         return corrections[word];
//       }
//       return word;
//     });
//     setCorrectedText(correctedWords.join(" "));
//     setCount(correctionCount);
//   };
//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>AutoCorrect App</h2>
//       <textarea
//         value={input}
//         onChange={handleChange}
//         rows="4"
//         cols="40"
//         placeholder="Type here..."
//       />
//       <CorrectedText text={correctedText} count={count} />
//     </div>
//   );
// }
// export default AutoCorrectApp;

// import React, { useState } from "react";
// const suggestionsList = [
//   "apple",
//   "banana",
//   "orange",
//   "mango",
//   "grape",
//   "pineapple",
//   "watermelon",
//   "kiwi",
//   "papaya",
//   "pear",
// ];
// function AutoSuggestion() {
//   const [inputValue, setInputValue] = useState("");
//   const [filteredSuggestions, setFilteredSuggestions] = useState([]);
//   const handleChange = (e) => {
//     const value = e.target.value;
//     setInputValue(value);
//     if (value.length > 0) {
//       const filtered = suggestionsList.filter((item) =>
//         item.toLowerCase().includes(value.toLowerCase())
//       );
//       setFilteredSuggestions(filtered);
//     } else {
//       setFilteredSuggestions([]);
//     }
//   };
//   const handleClick = (suggestion) => {
//     setInputValue(suggestion);
//     setFilteredSuggestions([]);
//   };
//   return (
//     <div style={{ width: "250px", margin: "20px auto", textAlign: "left" }}>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleChange}
//         placeholder="Type to search..."
//         style={{ width: "100%", padding: "8px" }}
//       />
//       <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//         {filteredSuggestions.map((suggestion, index) => (
//           <li
//             key={index}
//             onClick={() => handleClick(suggestion)}
//             style={{
//               padding: "8px",
//               border: "1px solid #ddd",
//               cursor: "pointer",
//               background: "#f9f9f9",
//             }}
//           >
//             {suggestion}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default AutoSuggestion;

// import React, { useReducer } from 'react'

// function reducer(state,action){
//     switch(action.type){
//         case 'increment':return{count:state.count+1}
//         case 'decrement':return{count:state.count-1}
//         default:return state;
//     }
// }

// function Practice() {
//     let[state,dispatch]=useReducer(reducer,{count:0})
//   return (
//     <div>
//         <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
//         <h4>{state.count}</h4>
//         <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
//     </div>
//   )
// }

// export default Practice

// import React, { useEffect, useState } from 'react'

// function Practice() {
//    let[tasks,setTasks]=useState([])
//    let[priority,setPriority]=useState('select')
//    let[title,setTitle]=useState('');
//    let[filteredTask,setFilteredTask]=useState([])

//    function addTask(){
//     let trimtitle=title.trim();
//     if(!trimtitle) return;
//         let useTasks={
//             title:trimtitle,
//             id:Date.now(),
//             completed:false,
//             priority
//         }
//         setTasks([...tasks,useTasks])

//    }
//    function handleComplete(id){
//     let result=tasks.map((task)=>task.id===id?{...task,completed:!task.completed}:task)
//      setTasks(result)
//    }
//    useEffect(()=>{
//     setFilteredTask(tasks);
//    },[tasks])
//   return (
//     <div>
//         <input type='enter task here' value={title} onChange={(e)=>setTitle(e.target.value)}/>
//         <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
//             <option value="select">Priority</option>
//             <option value="low">low</option>
//             <option value="med">med</option>
//             <option value="high">high</option>
//         </select>
//         <button onClick={addTask}>AddTask</button>

//         {
//             filteredTask.map((task)=>(
//                <div id={task.id}>
//                <span>{task.title} {task.priority}</span>
//                <button onClick={()=>handleComplete(task.id)}>{task.completed?'completed':'incomplete'}</button>
//                 </div>
//             ))
//         }
//     </div>
//   )
// }

// export default Practice

// first order function first class function
// infinite currying currying
// ternary operator

// let login=true;
// console.log(login?'Home Page':'login First');

// import React, { useEffect } from "react";
// import { useState } from "react";
// function Practice() {
//   let [currentPage, setCurrentPage] = useState(1);
//   let [data, setData] = useState([]);
//   let[search,setSearch]=useState('');
//   let[currentData,setCurrentData]=useState([])
//   let Page = 10;
//   async function fetchData() {
//     try {
//       let response = await fetch("https://jsonplaceholder.typicode.com/todos");
//       let result = await response.json();
//       setData(result);
//       console.log(result);
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   useEffect(() => {
//     fetchData();
//   }, []);

//   useEffect(()=>{
//     let result=data;
//     if(search){
//         result=data.filter((task)=>task.title.toLowerCase().includes(search.toLowerCase()))
//     }
//  let startPage = (currentPage - 1) * Page;
//  let endPage = startPage + Page;
//    currentData = result.slice(startPage, endPage);

//  setCurrentData(currentData)
//   },[search,data])

//   let fitlerPage=data.filter((task)=>task.title.toLowerCase().includes(search.toLowerCase()));
//   let totalPages=Math.ceil(fitlerPage.length/Page)
 
//   return (
//     <div>
//         <input value={search} onChange={(e)=>setSearch(e.target.value)}/>
//       {currentData.map((data) => (
//         <li key={data.id}>{data.title}</li>
//       ))}
//       <button onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}>
//         PREV
//       </button>
//       <h4>
//         {currentPage} of {totalPages}
//       </h4>
//       <button
//         onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
//       >
//         NEXT
//       </button>
//     </div>
//   );
// }

// export default Practice;



// import React, { useMemo, useState } from 'react'
// import Child from './Child';

// function Practice() {
//     let[add,setAdd]=useState(1);
//     let[sub,setSub]=useState(1);
    
//     let double=useMemo(()=>{
//         console.log("**")
//         return add*2
//     },[add])
//   return (
//     <div>
//         {double}
//         <Child double={double}/>
//         <button onClick={()=>setAdd(add+1)}>Add</button>
//         <button onClick={()=>setSub(sub-1)}>Sub</button>
//     </div>
//   )
// }

// export default Practice;



let createStore=configsture({
    count:countReducer,
    task:taskreducer
})

let state=useSelector(state=>state.count.value)
let dispatch=