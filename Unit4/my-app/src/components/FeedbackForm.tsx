import React, { useState } from "react";

type Feedback = {
  name: string;
  email: string;
  rating: string;
  message: string;
  date: string;
};

export default function FeedbackForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    rating: "Good",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<any>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("All fields required");
      return;
    }
    const fullData: Feedback = { ...form, date: new Date().toISOString() };
    console.log(fullData); 
    setSubmitted(true);
  };

  if (submitted) {
    return <h2>✅ Thank you for your feedback!</h2>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <select name="rating" onChange={handleChange}>
        <option value="Good">Good</option>
        <option value="Average">Average</option>
        <option value="Bad">Bad</option>
      </select>
      <textarea
        name="message"
        placeholder="Your feedback..."
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
