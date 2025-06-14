function reverseWords(words) {
  return words.trim().split(/\s+/).reverse().join(" ");
}

console.log(reverseWords("good    morning")); // Output: "morning good"
