function split(s) {
  return s.trim().split(/\s+/).reverse().join(" ");

  //   const lastword = a[a.length - 1];

  //   const firstWords = a.slice(0, -1);

  //   const result1 = firstWords.join(" ");
  //   const result = lastword + " " + result1;
}

console.log(split("the sky is blue"));
