import React, { useState } from "react";

export default function TrackerForm({ onSubmit }) {
  const [form, setForm] = useState({
    studyHours: "",
    breakTime: "",
    sleep: "",
    stress: "",
    focus: "",
    reflection: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      studyHours: "",
      breakTime: "",
      sleep: "",
      stress: "",
      focus: "",
      reflection: "",
    });
  };

  return (
    <form
      className="space-y-4 p-4 bg-white rounded shadow max-w-md mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="number"
        name="studyHours"
        value={form.studyHours}
        onChange={handleChange}
        placeholder="Study Hours"
        className="w-full border p-2 rounded"
      />
      <input
        type="number"
        name="breakTime"
        value={form.breakTime}
        onChange={handleChange}
        placeholder="Break Time (min)"
        className="w-full border p-2 rounded"
      />
      <input
        type="number"
        name="sleep"
        value={form.sleep}
        onChange={handleChange}
        placeholder="Sleep (hrs)"
        className="w-full border p-2 rounded"
      />
      <input
        type="number"
        name="stress"
        value={form.stress}
        onChange={handleChange}
        placeholder="Stress Level (1-10)"
        className="w-full border p-2 rounded"
      />
      <input
        type="number"
        name="focus"
        value={form.focus}
        onChange={handleChange}
        placeholder="Focus (1-10)"
        className="w-full border p-2 rounded"
      />
      <textarea
        name="reflection"
        value={form.reflection}
        onChange={handleChange}
        placeholder="Reflection (markdown supported)"
        className="w-full border p-2 rounded h-24"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Log Entry
      </button>
    </form>
  );
}
