import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo,deleteTodo } from './redux/action';

function TodoApp() {
    let[text,setText]=useState("");
    let todos=useSelector((state)=>state.todos)
    let dispatch=useDispatch();

    let handleAdd=()=>{
        if(text.trim()!==""){
            dispatch(addTodo(text));
            setText("");
        }
    }
  return (
    <div>
   <h1>Todos App</h1>
   <input value={text} onChange={(e)=>setText(e.target.value)} placeholder='enter todos'/>
   <button onClick={handleAdd}>Add</button>
   {todos.map((todo)=>(
    <div key={todo.id}>
        <div>{todo.title}</div>
        <button onClick={()=>dispatch(toggleTodo(todo.id))}>{todo.status?'undo':'done'}</button>
        <button onClick={()=>dispatch(deleteTodo(todo.id))}>Delete Todo</button>
         </div>
   ))}
    </div>
  )
}

export default TodoApp