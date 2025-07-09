
import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk"; 
import { footballReducer } from "./reducer";

const rootReducer = combineReducers({
  matches: footballReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
