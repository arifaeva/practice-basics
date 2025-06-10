// function reverseWords(words) {
//   // write code here
//   var reversed = [];
//   reversed = words.split("/s+");
//   var result = "";
//   for (var i = 0; i < reversed.length; i++) {
//     return (result += reversed[i].split("").reverse().join(""));
//   }
// }

function reverseWords(words) {
  return words.trim().split(/\s+/).reverse().join(" ");
}

console.log(reverseWords("good    morning")); // Output: "morning good"
