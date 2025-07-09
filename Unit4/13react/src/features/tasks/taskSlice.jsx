// // src/features/tasks/taskSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const taskSlice = createSlice({
//   name: "tasks",
//   initialState: [],
//   reducers: {
//     addTask: (state, action) => {
//       state.push({
//         id: Date.now(),
//         text: action.payload,
//         completed: false,
//       });
//     },
//     removeTask: (state, action) => {
//       return state.filter((task) => task.id !== action.payload);
//     },
//     toggleTask: (state, action) => {
//       const task = state.find((task) => task.id === action.payload);
//       if (task) {
//         task.completed = !task.completed;
//       }
//     },
//   },
// });

// export const { addTask, removeTask, toggleTask } = taskSlice.actions;
// export default taskSlice.reducer;







import { createSlice } from "@reduxjs/toolkit";
let taskSlice=createSlice({
  name:"tasks",
  initialState:[],
  reducers:{
    addTask:(state,action)=>{
      state.push({text:action.payload,id:Date.now(),completed:false})
    },
    removeTask:(state,action)=>{
     return state.filter((task)=>task.id!==action.payload)
    },
    toggleTask:(state,action)=>{
      let task=state.find((task)=>task.id==action.payload)
      if(task)task.completed=!task.completed;
    }
  }
})
export default taskSlice.reducer;
export let {addTask,removeTask,toggleTask}=taskSlice.actions;