import React, { useState } from "react";
import UserList from "./UserList";

function UserForm() {
  // Users list state: initially empty
  const [users, setUsers] = useState([]);

  // Form state for name, email, age
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  // Error message state
  const [error, setError] = useState("");

  // Handle input changes and update form data
  function handleChange(e) {
    const { name, value } = e.target;

    // Spread existing form data and update the changed field
    setFormData({ ...formData, [name]: value });
  }

  // Function to check if email is valid
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Submit handler
  function handleSubmit(e) {
    e.preventDefault(); // Prevent page reload

    const { name, email, age } = formData;

    // Basic validations
    if (!name.trim() || !email.trim() || !age.trim()) {
      setError("All fields are required.");
      return;
    }

    // Email format check
    if (!isValidEmail(email)) {
      setError("Invalid email format.");
      return;
    }

    // Age should be a number and > 0
    if (!Number.isInteger(Number(age)) || Number(age) <= 0) {
      setError("Age must be a positive integer.");
      return;
    }

    // If all validations pass, create new user
    const newUser = { name, email, age };

    // Add new user to users array
    setUsers([...users, newUser]);

    // Reset the form
    setFormData({ name: "", email: "", age: "" });

    // Clear any previous error
    setError("");
  }

  return (
    <div style={{ width: "300px", margin: "0 auto" }}>
      <h2>Add User</h2>

      {/* Show error message if any */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Form starts here */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <br />

        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />
        <br />
        <br />

        <button type="submit">Add User</button>
      </form>

      {/* Below the form, display the list of users */}
      <h3>User List</h3>
      <UserList users={users} />
    </div>
  );
}

export default UserForm;
