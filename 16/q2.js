const halfOrMore = (nums) => {
  const object = {};

  for (let i of nums) {
    if (object[i]) {
      object[i] = object[i] + 1;
    } else {
      object[i] = 1;
    }
  }

  for (let num in object) {
    if (object[num] >= nums.length / 2) {
      return num;
    }
  }
  return "no number is n/2 times";
};

console.log(halfOrMore([2, 2, 1, 1, 1, 2, 2]));
