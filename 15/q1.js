const pairSumtoTarget = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [nums[i], nums[j]];
      }
    }
  }
  return [];
};

console.log(pairSumtoTarget([3, 7, 11, 15], 18));
