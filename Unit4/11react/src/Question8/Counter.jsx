import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { decrement, increment } from './redux/action';
function Counter() {
  let count=useSelector((state)=>state.count);
  let dispatch=useDispatch();
  return (
    <div>
      <div>{count}</div>
      <div onClick={()=>dispatch(increment())}>Increment</div>
      <div onClick={()=>dispatch(decrement())}>Increment</div>
    </div>
  )
}

export default Counter