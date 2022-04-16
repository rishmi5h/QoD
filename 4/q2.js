const mergeArray = (arr1, arr2) => [...arr1, ...arr2];

console.log(mergeArray([1, 2, 3], [4, 5, 6]));

// for unknown numbers of arr
const mergeArr = (...arr) => {
  const resultArr = [];
  arr.map((item) => resultArr.push(...item));
  return resultArr;
};

console.log(mergeArr([1, 2, 3], [4, 5, 6], [7, 8, 9]));
