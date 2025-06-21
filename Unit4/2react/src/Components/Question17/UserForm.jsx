import React, { useState } from "react";
import UserList from "./UserList";

function UserForm() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });


  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  function handleSubmit(e) {
    e.preventDefault(); 

    const { name, email, age } = formData;

  
    if (!name.trim() || !email.trim() || !age.trim()) {
      setError("All fields are required.");
      return;
    }

 
    if (!isValidEmail(email)) {
      setError("Invalid email format.");
      return;
    }

    if (!Number.isInteger(Number(age)) || Number(age) <= 0) {
      setError("Age must be a positive integer.");
      return;
    }

    const newUser = { name, email, age };

    setUsers([...users, newUser]);

    setFormData({ name: "", email: "", age: "" });

  
    setError("");
  }

  return (
    <div style={{ width: "300px", margin: "0 auto" }}>
      <h2>Add User</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
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
      <h3>User List</h3>
      <UserList users={users} />
    </div>
  );
}

export default UserForm;
