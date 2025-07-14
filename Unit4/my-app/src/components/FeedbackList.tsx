import { getFeedbacks } from "../utils/localStorageUtils";
import { useEffect, useState } from "react";
import { Feedback } from "../types/feedback.types";

export default function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    setFeedbacks(getFeedbacks());
  }, []);

  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl font-bold mb-2">All Feedback</h2>
      <table className="min-w-full border">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Rating</th>
            <th>Message</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((f, i) => (
            <tr key={i} className="border-t">
              <td>{f.name}</td>
              <td>{f.email}</td>
              <td>{f.rating}</td>
              <td>{f.message}</td>
              <td>{new Date(f.date).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
