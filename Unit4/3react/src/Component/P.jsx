import React, { useState } from 'react'

function P() {
    let[todos,setTodos]=useState([])
    let[input,setInput]=useState('');

    function addTask(){
        let inputext=input.trim();
          setTodos([...todos,inputext])
    }
  return (
    <div>
        <input type='enter input todos here' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={addTask}>Add Task</button>
        {
            todos.map((todo)=>(
                <>
              <div>{todo}</div>
                </>
            ))
        }
    </div>
  )
}

export default P