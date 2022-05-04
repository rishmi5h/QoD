const findMaxBtwTwo = (a, b) => (a > b ? a : b);
const findMinBtwTwo = (a, b) => (a > b ? b : a);

const findMaxDifference = (numArr) => {
  maxNum = numArr.reduce((acc, curr) => findMaxBtwTwo(acc, curr), numArr[0]);
  minNum = numArr.reduce((acc, curr) => findMinBtwTwo(acc, curr), numArr[0]);
  return Math.abs(maxNum - minNum);
};

console.log(findMaxDifference([3, 2, 3, 6, 5, 1]));
