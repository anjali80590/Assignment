export let ADD_TODO='ADD_TODO'
export let DELETE_TODO='DELETE_TODO'
export let TOGGLE_TODO='TOGGLE_TODO'

export let addTodo=(title)=>{
    return {type:ADD_TODO,payload:title}
}
export let deleteTodo=(id)=>{
    return{type:DELETE_TODO,payload:id}
}
export let toggleTodo=(id)=>{
return {type:TOGGLE_TODO,payload:id}
}