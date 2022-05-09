const minCount = (arr) => {
  const obj = {};

  for (const num of arr) {
    if (obj[num]) {
      obj[num]++;
    } else obj[num] = 1;
  }

  let min = arr.length,
    res = -1;

  for (let [key, value] of Object.entries(obj)) {
    if (value < min) {
      min = value;
      res = key;
    }
  }

  for (let [key, value] of Object.entries(obj)) {
    if ((value === min) & (Number(key) > Number(res))) {
      res = key;
    }
  }
  return Number(res);
};

console.log(minCount([1, 3, 1, 2, 3]));
