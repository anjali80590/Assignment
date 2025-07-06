// import React from "react";
// import Navbar from "./Navbar";
// import { Routes ,Route} from "react-router-dom";

// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import Blogdetails from "./Blogdetails";

// function App() {
//   return (
//     <div>
//     <Navbar/>
//     <Routes>
//       <Route path='/' element={<Home/>}/>
//       <Route path='/about' element={<About/>}/>
//       <Route path='/contact' element={<Contact/>}/>
//       <Route path='/posts/:id' element={<Blogdetails/>}/>

      
//     </Routes>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

function App() {
  let [store, setStore] = useState(["riya", "nisi", "siya"]);

  return (
    <div>
      <ul>
        {store.map((item, i) => (
          <li
            key={i}
            style={{ color:i% 2 ==0 ?"green" : "blue" }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


// import React from 'react'
// // import P from './Components/P'
// import UserCard from './Components/UserCard'

// function App() {
//   return (
//     <div>
//       {/* <P/> */}
//       <UserCard/>
//     </div>
//   )
// }

// export default App
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

// import React from 'react'
// // import Question11 from './Components/Question11'
// // import Question12 from './Components/Question12'
// // import Question13 from './Components/Question13'
// // import Question15 from './Components/Question15'
// // import Form from './Components/Question16/Form'
// import P from './P'

// function App() {
//   return (
//     <div>
//    {/* <Form/> */}
//     </div>
//   )
// }

// export default App
