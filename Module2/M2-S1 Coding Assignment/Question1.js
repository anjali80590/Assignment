
const studentsProgress = [
  { name: "Ramesh", completedLessons: 40, totalLessons: 50 },
  { name: "Sita", completedLessons: 25, totalLessons: 50 },
  { name: "Manoj", completedLessons: 30, totalLessons: 60 },
  { name: "Pooja", completedLessons: 48, totalLessons: 50 },
  { name: "Anil", completedLessons: 15, totalLessons: 50 },
];

const activeStudents = studentsProgress.filter(
  (student) => (student.completedLessons / student.totalLessons) * 100 >= 50
);


const completionPercentages = activeStudents.map((student) => ({
  name: student.name,
  completionPercentage: (
    (student.completedLessons / student.totalLessons) *
    100
  ).toFixed(2),
}));


const totalCompletion = completionPercentages.reduce(
  (sum, student) => sum + parseFloat(student.completionPercentage),
  0
);

const avgCompletionPercentage =
  completionPercentages.length > 0
    ? (totalCompletion / completionPercentages.length).toFixed(2)
    : 0;

const topLearners = completionPercentages.filter(
  (student) => student.completionPercentage > 80
);


console.log(
  "List of Active Students with Completion Percentage:",
  completionPercentages
);
console.log("Average Course Completion Percentage:", avgCompletionPercentage);
console.log("Top Learners (More than 80% completion):", topLearners);
