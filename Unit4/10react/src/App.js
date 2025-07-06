
import React from 'react'
import ThemeToggle from './components/question6/ThemeToggle'
import Counter from './components/question7/Counter'
import ToggleMessage from './components/question8/ToggleMessage'
import FormWithReducer from './components/question9/FormWithReducer'
import CollegeForm from './components/question10/CollegeForm'

function App() {
  return (
    <div>
      {/* <ThemeToggle/> */}
      {/* <Counter/> */}
      {/* <ToggleMessage/> */}
      {/* <FormWithReducer/> */}
      <CollegeForm/>
    </div>
  )
}

export default App


// question 11 
// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Auth from "./components/question11/Auth";
// import Dashboard from "./components/question11/Dashboard";
// import PrivateRoute from "./components/question11/PrivateRoute";

// function App() {
//   const [isAuth, setIsAuth] = useState(false);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Auth onAuth={setIsAuth} />} />
//         <Route
//           path="/dashboard"
//           element={
//             <PrivateRoute isAuth={isAuth}>
//               <Dashboard />
//             </PrivateRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
