// Sort array

function sortArray(input) {
  return [...input].sort((a, b) => a - b);
}

console.log(sortArray([2, 3, 5, 1]));

function sortStringArray(input) {
  return [...input].sort();
}

console.log(sortStringArray(["cherry", "apple", "banana"]));

function reverseString(input) {
  return input.split("").reverse().join("");
}

console.log(reverseString("hai"));
