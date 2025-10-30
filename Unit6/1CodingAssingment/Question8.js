const average = students
  .filter((student) => student.marks > 80)
  .reduce(
    (acc, student, index, array) => acc + student.marks / array.length,
    0
  );

const total = people
  .sort((a, b) => b.age - a.age)
  .slice(0, 3)
  .reduce((sum, person) => sum + person.age, 0);

  undefined;
  undefined;