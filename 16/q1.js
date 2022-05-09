const moveZeroToEnd = (arr) => {
  let zeroArr = [];
  let nonZeroArr = [];
  for (const i of arr) {
    if (i === 0) {
      zeroArr.push(i);
    } else {
      nonZeroArr.push(i);
    }
  }
  return [...nonZeroArr, ...zeroArr];
};

// Input: nums = [0,2,0,3,12,0]
// Output: [2,3,12,0,0,0]

console.log(moveZeroToEnd([0, 2, 0, 3, 12, 0]));
