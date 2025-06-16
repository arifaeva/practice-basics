// Find the duplicate

function findNumberWithDuplicate(input) {
  const arr = [...input];
  const dup = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    if (count > 1 && !dup.includes(arr[i])) {
      dup.push(arr[i]);
    }
  }

  return dup;
}

console.log(findNumberWithDuplicate([1, 2, 3, 4, 3, 2, 9, 7, 4, 9, 8, 2, 4]));
