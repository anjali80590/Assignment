import React, { useReducer } from "react";

let initialState = {
  email: "",
  password: "",
  submitted: false,
  users: [],
};
function reducer(state, action) {
  switch (action.type) {
    case "email":
    case "password":
        return {...state,[action.type]:action.payload}
    case 'submitted':{
        let newusers={
            email:state.email,
            password:state.password
        }
        return {...state,users:[...state.users,newusers],submitted:true,email:"",password:""}
    }
    case 'reset':return initialState
  }
}
function Theme() {
  let [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3>USER FORM</h3>
      <input
        type="enter email"
        value={state.email}
        onChange={(e) => dispatch({ type: "email", payload: e.target.value })}
      />
      <input
        type="password"
        value={state.password}
        onChange={(e) =>
          dispatch({ type: "password", payload: e.target.value })
        }
      />
      <button onClick={() => dispatch({ type: "submitted" })}>submit</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <div>
        {state.users.length === 0 ? (
          <div>No users submitted yet.</div>
        ) : (
          <div style={{ marginTop: "1rem" }}>
            <h3>Submitted Users:</h3>
            <ul>
              {state.users.map((user, index) => (
                <li key={index}>
                  <strong>Email:</strong> {user.email},{" "}
                  <strong>Password:</strong> {user.password}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Theme;
