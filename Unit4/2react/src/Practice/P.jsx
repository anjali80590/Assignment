import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/action';
function P() {
    let dispatch=useDispatch();
    let count=useSelector((state)=>state.count)
  return (
    <div>
        <h4>{count}</h4>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default P