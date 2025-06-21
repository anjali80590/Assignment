import React from "react";
import UserCard from "./UserCard";
function UserList({ users }) {
  return (
    <div>
      {users.map((user, index) => (
        <UserCard key={index} {...user} />
      ))}
    </div>
  );
}

export default UserList;
