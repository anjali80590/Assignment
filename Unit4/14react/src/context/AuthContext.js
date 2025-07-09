// // src/components/AuthContext.js
// import React, { createContext, useContext, useEffect, useState } from "react";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { app } from "../firebase/firebaseConfig";

// import { createContext, useEffect, useState } from "react";

// const AuthContext = createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState(null);
//   const auth = getAuth(app);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) =>
//       setCurrentUser(user)
//     );
//     return unsubscribe;
//   }, []);

//   return (
//     <AuthContext.Provider value={{ currentUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }








import React from "react";
import {app} from '../firebase/firebaseConfig'
import { onAuthStateChanged } from "firebase/auth";
export let AuthContext=createContext();
export function AuthProvider({children}){
  let [currentUser,setCurrentUser]=useState('')
  let auth=getAuth(app);
  useEffect(()=>{
    let unsubsrice=onAuthStateChanged(auth, (user)=>{
     setCurrentUser(user);
    })
     
    return unsubsrice
    
    
  })
  return(
    <AuthContext.Provider value={currentUser}>
      {children}
    </AuthContext.Provider>}
  )
}