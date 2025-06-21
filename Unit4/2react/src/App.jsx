// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [page, setPage] = useState("home");

//   const renderPage = () => {
//     switch (page) {
//       case "home":
//         return <h2 className="page">Welcome to Home</h2>;
//       case "about":
//         return <h2 className="page">About Us</h2>;
//       case "contact":
//         return <h2 className="page">Contact Us</h2>;
//       default:
//         return <h2 className="page">Page Not Found</h2>;
//     }
//   };

//   return (
//     <div className="App">
//       <nav className="navbar">
//         <button onClick={() => setPage("home")}>Home</button>
//         <button onClick={() => setPage("about")}>About</button>
//         <button onClick={() => setPage("contact")}>Contact</button>
//       </nav>
//       <main>{renderPage()}</main>
//     </div>
//   );
// }

// // export default App;
// import React from "react";
// import Question11 from "./Components/Question11";
// import Question12 from "./Components/Question12";
// // import Question13 from "./Components/Question13";
// import Question15 from "./Components/Question15";
// import Form from "./Components/Question16/Form";
// import UserForm from "./Components/Question17/UserForm";
// function App() {
//   return (
//     <div
//       style={{
//         fontFamily: "Arial",
//         padding: "40px",
//         maxWidth: "900px",
//         margin: "auto",
//       }}
//     >
//       {/* <Question11/> */}
//       {/* <Question12 title='HTML' children='About HTML'/>
//       <Question12 title='CSS' children='About CSS'/>
//       <Question12 title='JS' children='About JS'/> */}
//       {/* <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "flex-start",
//           marginBottom: "40px",
//         }}
//       >
//         <div>
//           <h2 style={{ marginBottom: 10 }}>
//             The Right Plan for{" "}
//             <span style={{ color: "#8b5cf6" }}>Your Business</span>
//           </h2>
//         </div>
//         <p style={{ maxWidth: "400px", color: "#555" }}>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quod
//           in iure vero. Facilis magnam, sed officiis commodi labore odit.
//         </p>
//       </div>

//       <Question13 name="Starter" cost="Free" />
//       <Question13 name="Lorem Plus" cost="$32.00" />
//       <Question13 name="Lorem Pro" cost="$50.00" /> */}
//       {/* <Question15/> */}
//       <UserForm />
//     </div>
//   );
// }

// export default App;


import React from 'react'
import Question11 from './Components/Question11'
import Question12 from './Components/Question12'
import Question13 from './Components/Question13'
import Question15 from './Components/Question15'
import Form from './Components/Question16/Form'
import P from './P'

function App() {
  return (
    <div>
   {/* <Form/> */}
  <P/>
    </div>
  )
}

export default App