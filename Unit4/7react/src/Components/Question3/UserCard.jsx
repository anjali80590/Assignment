import React from "react";

function UserCard({ user }) {
  return (
    <div
      style={{
        padding: 10,
        border: "1px solid #ccc",
        margin: 10,
        borderRadius: 8,
      }}
    >
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.address.city}</p>
    </div>
  );
}

export default UserCard;
