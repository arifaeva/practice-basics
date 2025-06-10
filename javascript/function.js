function sayHello() {
  console.log("Hello!");
}

function sayHelloName(name) {
  console.log(`Hello ${name}!`);
}

// sayHelloName("Harry Potter");

function helloStudent(student) {
  return `Hello ${student}!`;
}

// console.log(helloStudent("Hermione Granger"));

const printName = (name) => {
  console.log(`Hello ${name}!`);
};

printName("Ronald Weasley");

const printName2 = (name) => {
  return `Hello ${name}!`;
};

console.log(printName2("Luna Lovegood"));
