// 2. Algorithm

// Example input: ABCDDDEFGH
// Each charcter represents an hour of work, with different alphabet represent different task
// Find the longest consecutive works that involve different kind of task
// For example, the input should result in DEFGH (not ABCD, because DEFGH is longer)

function getTheLongestTasks(input) {
  workArray = input.split("");
  newArray = [];

  for (i = 0; i < workArray.length; i++) {
    if (workArray[i] === workArray[i - 1]) {
      newArray.push(`-${workArray[i]}`);
    } else {
      newArray.push(workArray[i]);
    }
  }

  const joinedString = newArray.join("");
  const splittedArray = joinedString.split("-");
  string = "";

  for (i = 0; i < splittedArray.length; i++) {
    if (splittedArray[i].length > string.length) {
      string = splittedArray[i];
    }
  }

  return string;
}

console.log(getTheLongestTasks("ABCDDDEFGH"));
