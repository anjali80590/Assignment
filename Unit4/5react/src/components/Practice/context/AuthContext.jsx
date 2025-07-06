import {createContext, useState} from 'react';
export let AuthContext =createContext();
function AuthProvider({children}){
    let[loggedIn,setLoggedIn]=useState(false);
    let handleAuth=()=>{
        setLoggedIn((prev)=>!prev);
    }
    return(
        <div>
          <AuthContext.Provider value={{loggedIn,handleAuth}}>
            {children}
          </AuthContext.Provider>
        
        </div>
    )
}
export default AuthProvider;