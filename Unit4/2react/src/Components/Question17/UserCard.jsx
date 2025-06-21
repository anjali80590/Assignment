import React from "react";

// A simple card that shows one user's details
function UserCard({ name, email, age }) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      {/* Displaying the user's name */}
      <p>
        <strong>Name:</strong> {name}
      </p>

      {/* Displaying the user's email */}
      <p>
        <strong>Email:</strong> {email}
      </p>

      {/* Displaying the user's age */}
      <p>
        <strong>Age:</strong> {age}
      </p>
    </div>
  );
}

export default UserCard;
