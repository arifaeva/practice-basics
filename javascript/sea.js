// function heightChecker(heights) {
//   const original = [...heights];
//   const sortedHeights = heights.sort();

//   //   console.log(original);
//   //   console.log(sortedHeights);
//   let result = 0;

//   for (let i = 0; i < original.length; i++) {
//     if (original[i] !== sortedHeights[i]) {
//       result++;
//     }
//   }

//   console.log(result);
// }

// a = [2, 1, 3, 5, 4];

// heightChecker(a);

function heightChecker(heights) {
  // write code here
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
}

module.exports = {
  heightChecker: heightChecker,
};
