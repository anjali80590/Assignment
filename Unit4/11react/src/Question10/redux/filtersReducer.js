import { SET_FILTER } from "./actions";

let initialState={
    genre:"",
    author:"",
    status:""
}
export let filtersReducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_FILTER:return{...state,...action.payload}
        default:return state;
    }
}