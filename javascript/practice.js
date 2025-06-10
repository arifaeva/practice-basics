const students = [
  {
    name: "Cho Chang",
    house: "Ravenclaw",
    mark: 5,
  },
  {
    name: "Cedric Diggory",
    house: "Hufflepuff",
    mark: 3,
  },
  {
    name: "Harry Potter",
    house: "Gryffindor",
    mark: 4,
  },
  {
    name: "Hermione Granger",
    house: "Gryffindor",
    mark: 5,
  },
  {
    name: "Draco Malfoy",
    house: "Slytherin",
    mark: 2,
  },
];

function checkPassingGrade(students) {
  students.forEach((student) => {
    if (student.mark >= 3) {
      console.log(`${student.name} passed!`);
    } else {
      console.log(`${student.name} has not passed!`);
    }
  });
}

checkPassingGrade(students);

function groupStudentIntoHouses(students) {
  const slytherin = [];
  const gryffindor = [];
  const ravenclaw = [];
  const hufflepuff = [];

  students.forEach((student) => {
    if (student.house == "Slytherin") {
      slytherin.push(student.name);
    } else if (student.house == "Gryffindor") {
      gryffindor.push(student.name);
    } else if (student.house == "Ravenclaw") {
      ravenclaw.push(student.name);
    } else {
      hufflepuff.push(student.name);
    }
  });

  console.log("Students belong in Slytherin house: " + slytherin);
  console.log("Students belong in Gryffindor house: " + gryffindor);
  console.log("Students belong in Ravenclaw house: " + ravenclaw);
  console.log("Students belong in Hufflepuff house: " + hufflepuff);
}

groupStudentIntoHouses(students);
