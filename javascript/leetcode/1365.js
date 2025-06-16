function checkSmaller(input) {
  array = [];

  for (let i = 0; i < input.length; i++) {
    let count = 0;
    for (let j = 0; j < input.length; j++) {
      if (j !== i && input[j] < input[i]) {
        count++;
      }
    }
    array.push(count);
  }

  return array;
}

console.log(checkSmaller([6, 5, 4, 8]));
