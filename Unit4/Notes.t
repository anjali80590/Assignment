# ReactJS Interview Notes

What is ReactJS?
# ReactJS is a JavaScript library used to build user interfaces, especially for single-page applications (SPA).

Why ReactJS?
# - It helps build fast, interactive user interfaces efficiently.
# - Uses component-based architecture for reusability.
# - Utilizes Virtual DOM for performance.
# - Declarative code style.
# - Easy to manage state and props.

Is React a Library or Framework?
# React is a JavaScript library (not a full framework).
# You can combine it with routing (React Router), state management (Redux, Context API), etc., to make it act like a framework.

Declarative vs Imperative
# Declarative: You describe what the UI should look like. (e.g., JSX)
# Imperative: You describe how to change the UI step-by-step. (e.g., direct DOM manipulation)

What is Babel?
# Babel is a JavaScript compiler that converts modern JavaScript and JSX code into older JavaScript that works in all browsers.
# In React, Babel converts JSX into React.createElement calls.

What is JSX?
# JSX stands for JavaScript XML. It allows you to write HTML-like code inside JavaScript.
# JSX makes it easier to write and visualize UI components.

Real DOM vs Virtual DOM
# Real DOM:
# - The actual DOM rendered in the browser
# - Updates are slow (the entire tree might re-render)
# - Less efficient for frequent changes
# - Used in plain HTML, JS, jQuery

Virtual DOM:
# - A lightweight copy of the actual DOM kept in memory
# - When state or props change, a new Virtual DOM is created
# - React compares the new Virtual DOM with the old one (diffing)
# - Only the changed parts are updated in the real DOM (reconciliation)
# - Improves performance and efficiency

How Virtual DOM Works:
# 1. Component renders and returns JSX.
# 2. JSX is converted to Virtual DOM.
# 3. On update, React creates a new Virtual DOM tree.
# 4. React compares it with the previous one (diffing).
# 5. It calculates the minimal set of changes.
# 6. React updates only the changed elements in the real DOM.

How React Works Internally:
# 1. Browser loads index.html
# 2. index.js starts React and renders <App /> into <div id="root">
# 3. App.js returns JSX → Virtual DOM built
# 4. React compares new and old Virtual DOM
# 5. Updates real DOM with changes (reconciliation)
# 6. Uses props and state for dynamic behavior

Props in React
# - Props are inputs to components
# - They are used to pass data from parent to child components
# - Props are read-only and cannot be modified by the receiving component

State in React
# - State holds dynamic data in a component
# - It is managed within the component
# - State can be changed using setState() (in class) or useState() (in function)

Forms in ReactJS
# Two Types:
# 1. Controlled Component
# 2. Uncontrolled Component

Controlled Form
# - React controls the form data using state
# - Input value is bound to state
# - onChange updates the state
# Example:
# const [name, setName] = useState('');
# <input value={name} onChange={(e) => setName(e.target.value)} />

Uncontrolled Form
# - DOM controls the input value
# - React does not store the form data in state
# - Access value using ref
# Example:
# const inputRef = useRef();
# <input ref={inputRef} />
# inputRef.current.value

Components in React
# Components are reusable UI pieces
# Types: Functional Components and Class Components

Functional Component:
# - Defined using a plain JavaScript function
# - Returns JSX
# - Preferred in modern React

Class Component:
# - Defined using ES6 class syntax
# - Can hold state and lifecycle methods

Difference Between Functional and Class Components:
# - Functional Components use JavaScript functions.
# - Class Components use ES6 class syntax.
# - State was not supported in Functional Components before hooks.
# - Class Components support state and lifecycle methods by default.
# - Functional Components are recommended now.
# - Class Components are used less often in modern codebases.

# ReactDOM.render()
# ReactDOM.render(<App />, document.getElementById('root'));

Keys in Lists
# - Unique identifiers for list items
# - Help React track changes, insertions, and deletions efficiently
# Example:
# items.map(item => <li key={item.id}>{item.name}</li>)

Conditional Rendering
# Render different content based on conditions
# Example: {isLoggedIn ? <Logout /> : <Login />}

# Role of index.html, index.js, App.js
# index.html: Root div where app mounts
# index.js: Entry point of app
# App.js: Main component that holds other components

React.Fragment (<> </>)
# Group multiple elements without adding extra DOM node
# Example:
# <>
#   <h1>Title</h1>
#   <p>Description</p>
# </>

Re-rendering in React
# - Triggered when props or state change
# - Builds new Virtual DOM
# - Diffs against previous Virtual DOM
# - Updates only changed elements

className vs class
# - Use className in JSX because class is a reserved word in JS
# Example: <div className="container">Text</div>

Default Props
# - Fallback values for props
# Example:
# function Button({ label = "Click Me" }) {
#   return <button>{label}</button>;
# }
hooks
# hooks are function that let use state and lifecycle features in functional components 
# only works inside functional component and or custom hooks 

useState Hook 
# use to add state to functional component 
# usestate return an array  current state and a function to update 
# when call setstate component rerender 
# initila value can be number string object array 

useffect hook 
# used to handle side effects api call timers dom updates 
# run after component renders 
# if give depency array it only runs when those values changes 
# if depencdy array is empty it runs only once 

# react uses camelcase onClick