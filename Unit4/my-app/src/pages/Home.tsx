import FeedbackForm from "../components/FeedbackForm";

export default function Home() {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Customer Feedback</h1>
      <FeedbackForm />
    </div>
  );
}
