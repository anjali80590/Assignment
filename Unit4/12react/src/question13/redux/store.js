import { legacy_createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import { coffeeReducer } from "./reducer";

export const store = legacy_createStore(coffeeReducer, applyMiddleware(thunk));
