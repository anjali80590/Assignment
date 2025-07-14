import React, { useState } from "react";
import { Rating, Feedback } from "../types/feedback.types";
import { saveFeedback } from "../utils/localStorageUtils";

export default function FeedbackForm() {
  const [form, setForm] = useState<Omit<Feedback, "date">>({
    name: "",
    email: "",
    rating: Rating.GOOD,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message)
      return alert("All fields required");
    const fullData: Feedback = { ...form, date: new Date().toISOString() };
    saveFeedback(fullData);
    setSubmitted(true);
  };

  if (submitted)
    return (
      <h2 className="text-green-600 text-center">
        ✅ Thank you for your feedback!
      </h2>
    );

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 bg-white rounded shadow"
    >
      <input
        className="input"
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        className="input"
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <select name="rating" className="input" onChange={handleChange}>
        {Object.values(Rating).map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
      <textarea
        className="input"
        name="message"
        placeholder="Your feedback..."
        onChange={handleChange}
      /> <br />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}
