import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import {thunk}from "redux-thunk";
import { movieReducer } from "./movieReducer";
import { watchlistReducer } from "./watchlistReducer";

const rootReducer = combineReducers({
  movies: movieReducer,
  watchlist: watchlistReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
