import React from 'react'
import { ADD_TODO, DELETE_TODO } from './action'
let initialState={
    todos:[]
}
function reducer(state=initialState,action) {
    switch(action.type){
        case ADD_TODO:return{...state,todos:[...state,action.payload]};
        case DELETE_TODO:return{...state,todos:state.todos.filter((id)=>)}
    }
  return (
    <div>reducer</div>
  )
}

export default reducer

