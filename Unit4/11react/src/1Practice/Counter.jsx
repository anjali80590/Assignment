import React, { useState } from 'react'
import { addTodo,deleteTodo,toggleTodo } from '../Question9/redux/action'
function Counter() {
  let[title,setTitle]=useState('');
  let dispatch=useDispatch();
  let todo=useSelector((state)=>state.todo)
  function handleAdd(){
       title=title.trim();
       dispatch(addTodo(text))
  }
  return (
    <div>
      <input placeholder='enter title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <button onClick={handleAdd}>Add Task</button>
    </div>
  )
}

export default Counter