// import React from "react";
// function Practice() {
//   let li = ["react", "javascript", "css"];
//   return (
//     <div>
//       {li.map((val) => (
//         <div> {val}</div>
//       ))}
//     </div>  );}
// export default Practice;

// import React, { useState } from 'react'
// function Practice() {
//     let[active,setActive]=useState('home');
//     let renderComponent=()=>{
//         if(active=='home')return <h1>Home</h1>
//         if(active=='about')return <h1>About</h1>
//         if(active=='contact')return <h1>Contact</h1>
//     }
//   return (
//     <div>
//        <button onClick={()=>setActive('home')}>Home</button>
//        <button onClick={()=>setActive('about')}>About</button>
//        <button onClick={()=>setActive('contact')}>Contact</button>
//        {renderComponent()}
//     </div>
//   )
// }
// export default Practice

// import React, { useState } from 'react'
// function Practice() {
//     let[color,setColor]=useState('green');
//     function toggleColor(){
//         setColor((prev)=>prev=='green'?'yellow':'green')
//     }
//   return (
//     <div>
//         <button style={{backgroundColor:color}} onClick={toggleColor}>Toggle</button>
//         {color}
//     </div>
//   )
// }
// export default Practice

// import React, { useState } from 'react'
// function Question15() {
//     let[blog,showBlog]=useState(' select a blog to read')
//     const blogs = [
//       {
//         title: "Mastering JavaScript",
//         content: "JavaScript is a powerful language for web development.",
//       },
//       {
//         title: "React in Indian Startups",
//         content: "React is widely used in many Indian tech companies.",
//       },
//       {
//         title: "Career in Web Development",
//         content: "Explore job roles and growth in web development.",
//       },
//     ];
//     function getBlog(content){
//         showBlog(content)
//     }
//   return (
//     <div>
//         <ul  style={{cursor:"pointer"}}>
//             {blogs.map((blog)=>{
//                return <li onClick={()=>getBlog(blog.content)}>{blog.title}</li>
//             })}
//         </ul>
//         <span>{blog}</span>
//     </div>
//   )
// }
// export default Question15

// formhandlding

// import React, { useState } from "react";

// function TaskManager() {
//   const [tasks, setTasks] = useState([]);
//   const [input, setInput] = useState("");
//   const [priority, setPriority] = useState("Medium");
//   const [filter, setFilter] = useState("All");

//   const addTask = () => {
//     if (input.trim() === "") {
//       alert("Task cannot be empty");
//       return;
//     }
//     const newTask = {
//       id: Date.now(),
//       text: input.trim(),
//       priority,
//       completed: false,
//     };
//     setTasks((prev) => [...prev, newTask]);
//     setInput("");
//     setPriority("Medium");
//   };

//   const toggleCompletion = (id) => {
//     setTasks((prev) =>
//       prev.map((task) =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const deleteTask = (id) => {
//     setTasks((prev) => prev.filter((task) => task.id !== id));
//   };

//   const sortTasks = () => {
//     const priorityOrder = { High: 1, Medium: 2, Low: 3 };
//     setTasks((prev) =>
//       [...prev].sort(
//         (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
//       )
//     );
//   };

//   const filteredTasks = tasks.filter((task) => {
//     if (filter === "Completed") return task.completed;
//     if (filter === "Pending") return !task.completed;
//     return true;
//   });

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Advanced Task Manager</h2>

//       <input
//         type="text"
//         placeholder="Enter task"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <select value={priority} onChange={(e) => setPriority(e.target.value)}>
//         <option>High</option>
//         <option>Medium</option>
//         <option>Low</option>
//       </select>
//       <button onClick={addTask}>Add</button>
//       <button onClick={sortTasks}>Sort by Priority</button>

//       <div style={{ marginTop: "10px" }}>
//         <button onClick={() => setFilter("All")}>All</button>
//         <button onClick={() => setFilter("Completed")}>Completed</button>
//         <button onClick={() => setFilter("Pending")}>Pending</button>
//       </div>

//       <ul>
//         {filteredTasks.map((task) => (
//           <li
//             key={task.id}
//             style={{
//               color: task.priority === "High" ? "red" : "black",
//               textDecoration: task.completed ? "line-through" : "none",
//             }}
//           >
//             {task.text} ({task.priority})
//             <button onClick={() => toggleCompletion(task.id)}>
//               {task.completed ? "Undo" : "Complete"}
//             </button>
//             <button onClick={() => deleteTask(task.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TaskManager;


// import React, { useState } from 'react'
// function Practice() {
//     let[count,setCount]=useState(0);
//     function increment(){
//         setCount(count+1);
//     }
//     function decrement(){
//          if(count>=1){
//             setCount(count-1)
//          }
//     }
//   return (
//     <div>
//    <button onClick={increment}>+</button>
//    <button onClick={decrement}>-</button>
//    {count==10?'reached count':count}
//     </div>
//   )
// }
// export default Practice



// import React, { useState } from "react";
// function Practice() {
//   let [tasks, setTasks] = useState([]);
//   let [input, setInput] = useState("");
//   function addTask() {
//     if (input.trim() === "") {
//       alert("task cannot be empty");
//       return;
//     }
//     setTasks([...tasks, input.trim()]);
//     setInput("");
//   }
//   function clearTasks() {
//     setTasks([]);
//   }
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="enter task here"
//         onChange={(e) => setInput(e.target.value)}
//         value={input}
//       />
//       <button onClick={addTask}>Add</button>
//       {tasks.map((val) => (
//         <li>{val}</li>
//       ))}
//       <button onClick={clearTasks}>Clear</button>
//     </div>
//   );
// }
// export default Practice;




// import React, { useState } from "react";
// function AttendanceManager() {
//   const initialStudents = [
//     { id: 1, name: "Anjali", present: false },
//     { id: 2, name: "Rohit", present: false },
//     { id: 3, name: "Priya", present: false },
//   ];
//   const [students, setStudents] = useState(initialStudents);
//   const [filter, setFilter] = useState("all"); 

//   function toggleAttendance(id) {
//     setStudents((prev) =>
//       prev.map((student) =>
//         student.id === id ? { ...student, present: !student.present } : student
//       )
//     );
//   }

//   const filteredStudents = students.filter((student) => {
//     if (filter === "present") return student.present;
//     if (filter === "absent") return !student.present;
//     return true;
//   });

//   const presentCount = students.filter((s) => s.present).length;

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h2>Attendance Manager</h2>
//       <div>
//         <button onClick={() => setFilter("all")}>All</button>
//         <button onClick={() => setFilter("present")}>Present</button>
//         <button onClick={() => setFilter("absent")}>Absent</button>
//       </div>
//       <h4>Present Count: {presentCount}</h4>
//       <ul style={{ listStyle: "none", padding: 0 }}>
//         {filteredStudents.map((student) => (
//           <li
//             key={student.id}
//           >
//             {student.name}
//             <button onClick={() => toggleAttendance(student.id)}>
//               {student.present ? "Mark Absent" : "Mark Present"}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default AttendanceManager;
