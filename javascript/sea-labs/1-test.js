function heightChecker(heights) {
  const original = [...heights];
  const sortedHeights = heights.sort();

  //   console.log(original);
  //   console.log(sortedHeights);
  let result = 0;

  for (let i = 0; i < original.length; i++) {
    if (original[i] !== sortedHeights[i]) {
      result++;
    }
  }

  console.log(result);
  return result;
}
