export let ADD_TODO="ADD_TODO";
export let TOGGLE_TODO="TOGGLE_TODO"
export let DELETE_TODO="DELETE_TODO"

export let addTodo=(title)=>({
    type:ADD_TODO,
    payload:{
        id:Date.now(),
        title,
        status:false
    }
})
export let toggleTodo=(id)=>({
    type:TOGGLE_TODO,
  payload:id
})
export let deleteTodo=(id)=>({
    type:DELETE_TODO,
    payload:id
})