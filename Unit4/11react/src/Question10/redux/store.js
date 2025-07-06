import { combineReducers, createStore, legacy_createStore } from "redux";
import { booksReducer } from "./booksReducer";
import { filtersReducer } from "./filtersReducer";

let rootReducer = combineReducers({
  books: booksReducer,
  filters: filtersReducer,
});
export let store = legacy_createStore(rootReducer);
