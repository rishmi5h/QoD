const findMaxBtwTwo = (a, b) => (a > b ? a : b);

const findMax = (...num) => {
  const numArr = [...num];
  return numArr.reduce((acc, curr) => findMaxBtwTwo(acc, curr), 0);
};

findMax(1, 2, 3, 6, 5, 1);
