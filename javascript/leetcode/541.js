function reverseStr(s, k) {
  let arr = s.split("");

  for (let i = 0; i < arr.length; i += 2 * k) {
    let left = i;
    let right = i + k - 1;

    // ❗ Clamp right if it's out of bounds
    if (right >= arr.length) {
      right = arr.length - 1;
    }

    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr.join("");
}
