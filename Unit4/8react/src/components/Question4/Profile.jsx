
  
  // File: Question4/Profile.jsx
  import { useContext } from 'react'
  import { UserContext } from './UserContext'
  
  function Profile() {
    const { user } = useContext(UserContext)
    return (
      <div style={{ padding: 20 }}>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  }
  
  export default Profile