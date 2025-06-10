const students = [
  "Harry Potter",
  "Hermione Granger",
  "Ronald Weasley",
  "Draco Malfoy",
];

students.forEach((student) => {
  console.log(`Hello ${student}!`);
});

students.forEach((student) => {
  if (student === "Draco Malfoy") {
    console.log(`${student} is a student in Slytherin House.`);
  } else {
    console.log(`${student} is a student in Gryffindor House.`);
  }
});

for (let index = 0; index < students.length; index++) {
  console.log(`${students[index]} is a student of Hogwarts.`);
}
