#  1 intro to React with jsx and babel 
# 2 undertanding component props and virtual dom 
# 3 state management technique and usestate 
# 4 react with api and axios library 
#  5 useEffect  hook
# 6 React lifecycle Methods 
# 7 Context API in react 
# 8 Exploring routing in react 

# 9 useref and aplying pagination in reactjs 
# 10 advance state management with userreducer 
# 11intordcution to redux
# 12 advance redux and middle ware


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

File and Folder structure 
# node_modules: Contains all downloaded npm packages your project depends on; auto-created after installation.
# package.json: Holds information about project like  project name, scripts, and dependency list required to run the app.
# package-lock.json: It locks the exact versions of every installed package and its dependencies, ensuring consistency across environments.
# npm install: Installs all dependencies listed in package.json and creates node_modules and package-lock.json.



# A Single Page Application is a web app that loads a single HTML page
# and dynamically updates the content without reloading the entire page.
# This provides a faster, smoother user experience.

# Library: A set of tools you call when needed. You control the flow. (e.g., React)
#  Framework: It defines the structure and controls the flow. You fill in specific parts. (e.g., Angular, Next.js)

🔹 Why use React for SPA?
# - React uses a virtual DOM for fast UI updates.
# - Component-based architecture makes code reusable and maintainable.
# - React Router enables client-side routing (navigation without page reloads).

# 🔵 SPA Rendering Types
✅ Client-Side Rendering (CSR)
# - Page renders in the browser after JavaScript loads.
# - Initially shows a blank page, then fills content via JavaScript.
# - Slower initial load on slow networks.
# - Not ideal for SEO (search engines might not see dynamic content).
# - Very fast navigation after the first load.
# - Common in Create React App and most SPAs.

✅ Server-Side Rendering (SSR)
# - Page is pre-rendered on the server before being sent to the browser.
# - Content is visible immediately (better first impression).
# - Faster initial load, especially for new visitors.
# - Excellent for SEO — search engines can crawl HTML content directly.
# - Best for content-heavy or SEO-focused sites (e.g., blogs, e-commerce).
# - Commonly used with Next.js (React framework).

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
# <!-- increment count and render react reload varaible component rerender refresh data is gone usestae capable why can'use varible in react  -->
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


React lifecycle 
#The React Lifecycle refers to the series of phases that a component goes through from creation to removal in the DOM.
Three Phases 
Mounting: When a component is first created and added to the DOM. 
Updating: When a component re-renders due to state or props changes.
Unmounting: When a component is removed from the DOM (cleanup happens here)
# useEffect(() => {
#   ✅ Mounting logic here
#   return () => {
#🔴 Unmounting logic here };}, []); // Runs only once
# useEffect(() => {
#    🟡 Updating logic when 'count' changes
# }, [count]);

# runs on every rerender clean up before everyrerender 
#  If we don’t use clearInterval, the timer will keep running even after the component is gone, which is bad for memor


Axios 
# Axios is a JavaScript library used to send and receive data from APIs using HTTP methods like GET, POST, PUT, and DELETE.
# easy syntax autmocally convert into json handles erros timeout easily 
# Method	Purpose
# axios.get(url)	Fetch data (read)
# axios.post(url, data)	Create data (send)
# axios.put(url, data)	Update data
# axios.delete(url) delete data 



Prop Drilling 
#  Prop Drilling means passing data (props) from parent to child to grandchild 
#    and so on, even if intermediate components don't need that data.
#  It creates tightly coupled components.
#  Difficult to maintain and update in large applications.
# Small changes in component structure can break the entire data flow.

CONTEXT API

Context API
#  is a React feature used to share state/data globally across components
#without manually passing props at every level.
#  It solves the problem of prop drilling.

 Steps to use Context API:
# 1. Create a context using createContext()
# 2. Wrap the component tree with Context.Provider and pass value
#  3. Use useContext() in any child to access the value

Benefits:
#  No prop drilling ,Centralized and clean state management, Better scalability and readability

CHILDREN PROP
# children' is a special prop in React that represents any nested elements 
#  passed inside a component's opening and closing tags.
# Used to create wrapper/layout components like Card, Box, Modal etc.

Benefits:
#  Makes components reusable and composable
#  Flexible to render dynamic JSX inside other components
#  Helps create layouts and wrappers without hardcoding content


8 REACT ROUTER 
# It allows you to create single-page applications (SPA) with multiple views or pages, without reloading the entire page when the URL changes.

1️⃣ BrowserRouter
# Used to wrap the entire application to enable routing functionality.
# It must be placed at the top level of the app to handle route changes.
# It listens to the URL and renders the appropriate component.

2️⃣ Routes and Route
# Routes is a container that holds multiple Route components.
# Route is used to map a specific path to a specific component.
# The path attribute defines the URL path.
# The element attribute defines which component should be shown.
# A wildcard path like star is used to catch all unknown routes.

3️⃣ Link and NavLink
# Link is used to navigate between different routes without refreshing the page.
# NavLink works like Link but allows highlighting the currently active link.
# Both are used to create navigation menus or buttons.

4️⃣ useNavigate hook
# useNavigate is a hook that allows navigation programmatically.
# It is commonly used after events like login, form submission, or button click.
# It returns a function which can be called with the target path.

5️⃣ useParams hook
# useParams is a hook that lets you access dynamic parameters from the URL.
# It is useful when a route contains a variable part like an id or slug.
# It returns an object containing key-value pairs of the dynamic segments.

Dynamic Routing
# Allows routes with dynamic segments (e.g., /product/:id) to load specific conte



# UserReducer 
# it is used to manage state like usestate and but its better for complex login when state has multple values 
# it is used to manage state with multuple values 
# reducer: A function that handles all the logic
# initialState: The default value for the state
# dispatch: A function you call with an action
# action: An object like { type: 'INCREMENT' }
# state: The current state (you don’t update directly)


✅ Why Performance Optimization?
# - Avoid unnecessary re-renders
# - Improve load time and responsiveness
# - Do less work at the right time

State/Prop Changes
        ↓
  1. Render Phase        → JSX evaluated to create new Virtual DOM
  2. Reconciliation      → Compare new Virtual DOM with old one (diffing)
  3. Commit Phase        → Apply only the actual changes to Real DOM
Every state change → triggers a re-render of that component.

Child components also re-render unless:
React.memo is used
Props havent changed

# uncessary rerendering 
Use React.memo() to avoid re-rendering child components if props haven’t changed
Use useCallback() to memoize functions so they don’t change on every render
Use useMemo() to memoize expensive calculations

⚙️ React Rendering Phases
# 1. Render Phase: Rebuilds the virtual DOM
# 2. Reconciliation Phase: Compares old vs new virtual DOM
# 3. Commit Phase: Applies real DOM updates + runs useEffect

🚫 What Causes Unnecessary Work?
# - Re-rendering unchanged components
# - Recalculating values/functions every render
# - Passing new function references as props
# - Loading too much data/images at once

🖼️ Other Performance Techniques
# - Lazy load images on scroll
# - Load data on demand (pagination, infinite scroll)
# - Code splitting with React.lazy and Suspense
# - Virtualize long lists using libraries like react-window

usecallback 
# useCallback is a React hook that returns a memoized (cached) version of a function, so it doesn’t get recreated on every render unless its dependencies change.

usememo 
# useMemo is a hook that memoizes the result of a computation, so it only recalculates when its dependencies change.

useref 
# useRef is a hook that lets you persist values between renders without causing re-renders. It's commonly used to access DOM elements or store mutable values.

custom Hooks
# A custom hook in React is a reusable function starting with use that lets you share logic (like form handling, API calls, toggles) across components using built-in hooks like useState and useEffect
# custom hook 
# start with use just another function 

Uses 
# react components often repeats code 
# Fetching data from an API
# Handling forms
# Toggling booleans
# Managing timers


how to create 
# Always start with use
# Can use other hooks (useState, useEffect, etc.)
# Return data or functions


# write same logic and every component 
# wirte logic once use it many component 



TYPESCRIPT 
# browser cannot understand typescript  when try to run it it converts into js 






# 1 intro to react 
# 2 understanding component 
# 3 state management
# 4 react with axios 

# 5 exploring useEffect Hook 
# 6 intro to vite and react lifcyle
# 7 context api 
# 8 expolring routing in react 

# 9 useref pagination 
# 10 advnace state managment 
# 11 intro to redux 
# 12advance redux 

# 13 modren redux with reducer 
# 14 buidling application 1 
# 15 building applciation 2 
# 16 performnace optmisation 
# 17 custom hooks 
# 18 typescript 
# 19 typescript 2 
# 20 AI 
npx create-react-app 18react --template typescript
