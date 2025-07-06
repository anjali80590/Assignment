import {useContext} from 'react';
import { AuthContext } from './AuthContext';
function Page(){
    let{loggedIn,handleAuth}=useContext(AuthContext)
    return(
        <div>
      {loggedIn ? ' user Login' :' Please Login'}
      <button onClick={handleAuth}>Login</button>
        </div>
    )
}
export default Page;