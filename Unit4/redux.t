# Save the Redux definitions into a .txt file

usereducer is a react hook that helps to manage complex state using function called a reducer 
=====================
🟥 REDUX - DEFINITIONS
=====================

1. Redux:
Redux is a JavaScript library for managing application state in a centralized way.
It is used mostly with React for predictable state updates.

2. Redux Store:
The store is an object that holds the entire state of your application.
It is created using createStore or configureStore (Redux Toolkit).
There is only ONE store in a Redux app.

3. Action:
An action is a plain JavaScript object that describes what happened.
It must have a 'type' property.
Example: { type: 'INCREMENT' }

4. Reducer:
A reducer is a pure function that takes the current state and an action,
and returns a new state based on the action type.
Reducers must not mutate the original state.

5. Dispatch:
dispatch() is a method used to send actions to the Redux store.
When we dispatch an action, Redux sends it to the reducer to update the state.

6. Middleware:
Middleware is used in Redux to handle side effects like API calls, logging, etc.
It runs between dispatching an action and the moment it reaches the reducer.
Example: redux-thunk (for async operations).
applyMiddleware is a Redux function used to enable middleware like redux-thunk.

redux thunk 
redux-thunk is middleware that allows you to write action creators that return a function instead of an object.
This function can contain asynchronous code, such as fetching data from an API.

legacy_createStore is the older way to create a Redux store before Redux Toolkit.handle combinereducer middlewares need to manually setup combierreducers applymiddlewares 

combineReducers merges multiple reducer functions into one single root reducer.
==========================
🟩 REDUX TOOLKIT (RTK)
==========================

1. Redux Toolkit:
Redux Toolkit is the official, recommended way to write Redux logic.
It reduces boilerplate and simplifies store configuration.

2. configureStore():
This function creates a Redux store with good default settings.
It includes Redux Thunk by default.
Usage: const store = configureStore({ reducer: yourReducer })

3. createSlice():
It helps you create a reducer and its actions in one go.
It automatically creates action creators for each reducer function.

4. createAsyncThunk():
This is used to handle async operations like API requests.
It works with extraReducers inside createSlice.


==========================
🟦 REACT-REDUX HOOKS
==========================

1. <Provider store={store}>
This React component is used to give access to the Redux store throughout your app.
It should wrap your <App /> component.

2. useDispatch():
A React hook from react-redux used to dispatch actions inside a functional component.
Usage: const dispatch = useDispatch();
Then: dispatch(increment());

3. useSelector():
A React hook from react-redux used to read values from the Redux store.
Usage: const count = useSelector(state => state.counter.value);


==========================
🟨 useReducer Hook (React)
==========================

1. useReducer:
A React hook similar to Redux that is used to manage local component state using reducers.
It is useful when the state logic is complex (like multiple conditions).

2. Syntax:
const [state, dispatch] = useReducer(reducerFunction, initialState);

3. Example:

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const [state, dispatch] = useReducer(reducer, initialState);


==========================
✅ Summary
==========================

- Redux: Used for managing global app state.
- Redux Toolkit: Makes Redux easy and boilerplate-free.
- Provider: Makes the Redux store available to all components.
- useDispatch: Sends actions to update state.
- useSelector: Reads values from the Redux state.
- useReducer: Handles complex local state logic in a component.




# userducer 11 
# redux 12 
# reduxtoolkit 13
