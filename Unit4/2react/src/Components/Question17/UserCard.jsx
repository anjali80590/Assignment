import React from "react";
function UserCard({ name, email, age }) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <p>
        <strong>Name:</strong> {name}
      </p>

      <p>
        <strong>Email:</strong> {email}
      </p>

      <p>
        <strong>Age:</strong> {age}
      </p>
    </div>
  );
}

export default UserCard;
