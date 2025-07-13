import React from "react";
import MentorDashboard from "../components/MentorDashboard";

export default function MentorView() {
  const sampleData = [
    {
      reflection: "I felt stressed today, but I managed 4 hours of deep work.",
    },
    { reflection: "Sleep was great, helped me focus better!" },
  ];

  return <MentorDashboard students={sampleData} />;
}
