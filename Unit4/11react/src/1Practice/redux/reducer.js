import { toggleTodo,removeTodo,addTodo } from "./action";

let initialstate={
    todo:[]
}

function reducer(state=initialstate,action){
      switch(action.type){
        case toggleTodo:return{...state,todos:[...state.todo,action.payload]}
        case removeTodo:return{...state,todo:state.todo.map((todo)=>todo.id!==action.payload)}
      }
}