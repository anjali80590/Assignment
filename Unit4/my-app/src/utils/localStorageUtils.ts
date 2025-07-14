import { Feedback } from "../types/feedback.types";

const FEEDBACK_KEY = "feedbacks";

export const saveFeedback = (feedback: Feedback) => {
  const existing = getFeedbacks();
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify([...existing, feedback]));
};

export const getFeedbacks = (): Feedback[] => {
  const data = localStorage.getItem(FEEDBACK_KEY);
  return data ? JSON.parse(data) : [];
};
