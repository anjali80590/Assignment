// // src/app/store.js
// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
// import taskReducer from "../features/tasks/taskSlice";
// import cartReducer from "../features/cart/cartSlice"; // ✅ Make sure the path is correct

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     tasks: taskReducer,
//     cart: cartReducer, // ✅ FIXED from `cartRe`
//   },
// });


import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import taskReducer from '../features/tasks/taskSlice'
import cartReducer from '../features/cart/cartSlice'
export let store=configureStore({
  reducer:{
    counter:counterReducer,
    task:taskReducer,
    cart:cartReducer
  }
})