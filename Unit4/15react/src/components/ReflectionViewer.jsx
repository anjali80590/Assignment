import React from "react";
import ReactMarkdown from "react-markdown";

export default function ReflectionViewer({ reflections }) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Past Reflections</h2>
      <div className="space-y-4">
        {reflections.map((entry, index) => (
          <div key={index} className="p-3 border rounded">
            <ReactMarkdown>{entry.reflection}</ReactMarkdown>
            <p className="text-sm text-gray-500 mt-2">🕒 {entry.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
