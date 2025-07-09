// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addTask, removeTask, toggleTask } from "./taskSlice";

// function TaskList() {
//   const [taskText, setTaskText] = useState("");
//   const tasks = useSelector((state) => state.tasks);
//   const dispatch = useDispatch();

//   const handleAdd = () => {
//     if (taskText.trim() !== "") {
//       dispatch(addTask(taskText));
//       setTaskText("");
//     }
//   };

//   return (
//     <div>
//       <h2>Task List</h2>
//       <input
//         value={taskText}
//         onChange={(e) => setTaskText(e.target.value)}
//         placeholder="Add task"
//       />
//       <button onClick={handleAdd}>Add Task</button>

//       <ul>
//         {tasks.map((task) => (
//           <li key={task.id}>
//             <span
//               style={{
//                 textDecoration: task.completed ? "line-through" : "none",
//               }}
//               onClick={() => dispatch(toggleTask(task.id))}
//             >
//               {task.text}
//             </span>
//             <button onClick={() => dispatch(removeTask(task.id))}>❌</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // export default TaskList;














import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask,removeTask, toggleTask } from './taskSlice';
function TaskList() {
  let [text,setText]=useState('');
  let dispatch=useDispatch();
  let tasks=useSelector(state=>state.task)
  let handleTask=()=>{
    let trimtask=text.trim();
    dispatch(addTask(trimtask))
    setText('')
  }

  return (
    <div>
      <input type='text' value={text} onChange={(e)=>setText(e.target.value)}/>
      <button onClick={handleTask}>Add Task</button>
      {tasks.map((task)=>(
        <div>
          <div>{task.text}</div>
          <div onClick={()=>dispatch(removeTask(task.id))}>Rremove</div>
          <div onClick={()=>dispatch(toggleTask(task.id))}>{task.completed?'completed':'not completed'}</div>
          </div>
      ))}
    </div>
  )
}

export default TaskList