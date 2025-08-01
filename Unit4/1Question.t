1 INTRO TO REACT JSX AND BABEL
# Q1 Impreative and Declartive with code and work with usestate without babel  

# Q2 Build a React app that displays a hardcoded list of items ("React", "JavaScript", "CSS") using JSX.

# Q3  Build a React and Vanilla JS app to compare DOM updates using Virtual DOM vs direct DOM by tracking title changes and update counts

# Q-4 Debugging

# Q-5 Create a React component with buttons to switch between 'Home', 'About', and 'Contact' views


2 UNDERSTANDING PROPS STATE VIRTUAL DOM 
# Q11: Create a React component with a button that toggles its background color between green and yellow and displays the current color in a message below.

# Q12: Build a reusable Card component in React that accepts a title prop and displays dynamic content using children.

# Q13: Create a component-based React layout UI by splitting the design into the smallest reusable components and styling them.

# Q14 Debugging

# Q15: Build a React blog viewer that displays blog titles and toggles their content on click using useState.

# Q16: Create a dynamic ProductCard component with props, form input, and validation for name, price, image, and discount.
# learning ...form in usercard divwritename then divwritename

# Q17: Build a UserList in React that renders UserCards from a validated form and updates the list efficiently using the virtual DOM.
# localstoarge string based storage for store array or obj convet them to string jsonstrinfify backtoobject using obj.parse 


3 STATE MANAGEMENT TECHNIQUE USESTATE
# Q11 Debugging 

# Q12: Create an advanced Task Manager using useState that allows adding tasks with priority, sorting, completion toggling, deletion, filtering, and highlighting high-priority tasks.

# Q13: Create a simple counter app using useState that supports increment, decrement, and reset, with a message when count reaches 10 and preventing count from going below 0.


# Q14: Build a basic Todo List app using useState to manage tasks with features to add, clear, validate input, and show a message when the list is empty.


# Q15: Build an Attendance Manager using useState to toggle student attendance, show count of present students, and filter by all/present/absent with color-coded styling.


4 REACT WITH API AND AXIOS 
# Q1 Fetch and Print Data on Button Click
# Build a React app that fetches product data from FakeStore API only when a button is clicked and logs it to the console without using useEffect, with loading and error handling as bonus.

# Q2 Fetch and Render Product Cards on Button Click
# Create a React app that fetches product data from FakeStore API on button click and displays product cards in a responsive grid layout, using useState for data, with loading, error, and clear functionality.

# Q3 Meme Explorer with Search, Sort, Filter, and Theme Toggle
# Build a Meme Explorer app that fetches memes from Imgflip API using axios and allows searching, filtering, sorting, and toggling light/dark themes, with data caching in localStorage and full UI interactivity.


5 EXLPORRING USEFFFECT HOOKS 
# Toggle Theme with Props and Conditional Styling
# Build a React app with a ThemeApp component to toggle light/dark themes using useState, and a reusable ThemedBox component styled via props, with theme persistence in localStorage using useEffect.

# Daily Quote Generator (Auto-refresh + Button)
# Create a React quote viewer that fetches from https://api.quotable.io/random, auto-refreshes every 30 seconds using useEffect, includes a "Get New Quote" button, and shows a loading indicator during fetch.

# Fetch and Display User Profiles
# Develop a React app that fetches user profiles from https://jsonplaceholder.typicode.com/users using useEffect, displays them via a reusable UserCard component, and includes loading, error, and name-based search filter.

# React Stopwatch with Sound Trigger
# Implement a React stopwatch using useState and useEffect, with Start/Stop buttons, and trigger a sound or console message at 10 seconds using setInterval, ensuring proper interval cleanup.


6 LIFECYCLE METHODS
# 1Counter Component with Initial Value from Props
# Create a Counter component in React that accepts an initialValue prop, displays the current count, allows increment/decrement (but never below 0), and disables the decrement button when count is 0.

#  2. Toggle Button Component
# Build a ToggleButton React component that toggles between "ON" and "OFF" states on click, displays the state in green when ON and red when OFF using conditional styling.

# 3. React Profile Card Component Using Props
# Create a reusable ProfileCard component in React that displays a user's name, age, and bio (truncate bio >100 chars with “… Read More”), applies default props if not provided, and uses CSS or any styling framework.

#  4. AutoCorrect App using React, useState, and Props Only
# Build an AutoCorrectApp React component that uses a corrections dictionary to replace misspelled words in real-time from user input and show the corrected preview, with an optional reusable CorrectedText component and correction count


7 CONTEXT API IN REACT 
# L0 - Create a Simple Props Drilling Example: Build a React app that passes a user's name from App to a deeply nested component using props.

# L0 - Basic Context API Implementation: Create a React app with a global theme ("light"/"dark") using Context API and toggle it from App.jsx.

# L1 - User Authentication with Context API & Chakra UI: Build a dashboard layout using Chakra UI and multiple contexts (AuthContext, ThemeContext) with a Navbar, Sidebar, Main, and Footer.

# L1 - Authentication Context App: Create a React app to toggle login/logout state globally using Context API, and update Navbar, Main, and Footer conditionally.


8 EXPLORING ROUTING IN REACTJS 
#  Assignment 1: Blog App with Filtering and Details Page
# Build a React blog app using react-router-dom with routes /, /post/:id, and /about, display blog posts from https://dummyjson.com/posts, add a Navbar visible on all pages, filter posts by title on the home page, and show full post content and tags on the details page.

#  Assignment 2: Weather Dashboard with Location Routing
# Create a weather app with routes / and /weather/:city using OpenWeatherMap API to search by city name, display temperature, humidity, and condition, and (bonus) embed a Google Map of the city using the Google Maps Embed API.

#  Assignment 3: Product Store with Sorting and Filtering
# Build a product store with routes / and /product/:id, fetch data from https://dummyjson.com/products, enable filtering by category and sorting by price (low to high / high to low), and manage state using useState and useEffect.

# Assignment 4: User Profile App using Context API
# Build a React app with routes /, /profile, and /settings using Context API to manage user data (name/email), allow viewing profile on /profile, updating profile on /settings, and use useContext, useState, and useEffect for state and context management.

#  Assignment 5: Movie Search App with Routing and API
# Create a movie search app using the OMDb API with routes / for searching movies by title and /movie/:id for details (title, poster, year, genre, plot), and implement loading state and error handling for invalid results.



# CUSTOM HOOKS 
usedebounce
 usefetch 
 useform 
 uselocaltorage 
 usetoggle 
 useprevious.jsx 
 usewindowwidth
 usetTImer