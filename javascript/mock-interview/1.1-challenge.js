// 1.Comparison

console.log("9" > "11"); // true
console.log("24" < "29"); // true

// When comparing two strings, javascript will compare them in lexicographical table
// Lexicographical is like writing a dictionary, from A to Z and from 1 to 9, left to the right

// In case "9" > "11", Javascript will only compare first character of every unit which is "9" and "1".
// Since "1" comes first before "9" in lexicograpical table, javascript will judge that "9" is indeed bigger that "1" --> TRUE

// In case "24" > "29", since the first character of each unit is the same (which is "2")
// Javascript will take second character of every unit, which will be "4" < "9"
// Since "4" is comes first before "9" in lexicographical order, javascript will judge "4" is indeed smaller than "9" --> TRUE
