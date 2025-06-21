import React, { useState } from 'react'

function P() {
   const [filter, setFilter] = useState("All");
 
   const [students, setStudents] = useState([
     { id: 1, name: "Anjali", present: true },
     { id: 2, name: "Ravi", present: false },
     { id: 3, name: "Sneha", present: true },
     { id: 4, name: "Arjun", present: false },
     { id: 5, name: "Maya", present: true },
   ]);
  return (
    <div>
        <h2>Attence Manager</h2>
         <div>Filter</div>
         <select value={filter} onChange={(e)=>setFilter(e.target.value)}>
            <option value=""></option>
         </select>
    </div>
  )
}

export default P