// import React from 'react'
// import {useDispatch,useSelector} from 'react-redux'
// import { increment,decrement } from './counterSlice';

// function Counter() {
//     let count=useSelector(state=>state.counter.value)
//     let dispatch=useDispatch();
//   return (
//     <div>
        
//     </div>
//   )
// }

// export default Counter

// What is the Redux store?
// ➤ It is a central place that holds the state of your entire app.

// Why do we need a store in React?
// ➤ To manage and share state between components in a clean, predictable way.

// How to create a store?
// Using configureStore from @reduxjs/toolkit

// What is dispatch?
// ➤ dispatch() is used to send actions to the Redux store to update the state.

// How does it work?
// ➤ When you dispatch an action, Redux updates the state based on the reducer logic.

// What is useSelector?
// ➤ useSelector lets you read data from the Redux store state.

// connecting store to react using proivder 



import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './counterSlice';

function Counter() {
  let count=useSelector(state=>state.counter.count)
  let dispatch=useDispatch();
  return (
    <div>
      <h4>{count}</h4>
      <button onClick={()=>dispatch(increment())}>INCREMENT</button>
      <button onClick={()=>dispatch(decrement())}>DECREMENT</button>
    </div>
  )
}

export default Counter