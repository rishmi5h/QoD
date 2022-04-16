const replace = (arr, num, replacedNum) =>
  arr.map((item) => (item === num ? (item = replacedNum) : item));
console.log(replace([1, 5, 6, 5, 3], 5, 10));
