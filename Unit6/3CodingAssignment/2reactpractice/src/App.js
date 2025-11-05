import React from 'react'
import LaptopCustomizer from './Question2/LaptopCustomizer'
import OTPInput from './Question3/OTPInput'

function App() {
  return (
    <div>
      {/* <LaptopCustomizer/> */}
      <OTPInput/>
    </div>
  )
}

export default App


// import React, { useEffect, useState } from 'react'

// function App() {
//   let[add,setAdd]=useState(0);
//   let[sub,setSub]=useState(99);
//   useEffect(()=>{
//     console.log("runs everytime")
//   })
//   useEffect(()=>{
//     console.log("runs once")
//   },[])
//   useEffect(()=>{
//     console.log("runs when state gets change sub")
//   },[sub])
//   return (
//     <div>
//       <button onClick={()=>setAdd(add+1)}>Add</button>
//       <h1>Add : {add}</h1>
//       <button onClick={()=>setSub(sub-1)}>Sub</button>
//       <h2>Sub : {sub}</h2>
//        </div>
//   )
// }

// export default App