import React from "react";
import UserCard from "./UserCard";

// This component receives all users as props and renders them using UserCard
function UserList({ users }) {
  return (
    <div>
      {/* Mapping through users and rendering UserCard for each one */}
      {users.map((user, index) => (
        // Spreading user object as props to UserCard
        <UserCard key={index} {...user} />
      ))}
    </div>
  );
}

export default UserList;
