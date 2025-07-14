export interface Feedback {
  name: string;
  email: string;
  rating: Rating;
  message: string;
  date: string;
}

export enum Rating {
  EXCELLENT = "Excellent",
  GOOD = "Good",
  AVERAGE = "Average",
  POOR = "Poor",
}
