const maxCount = (arr) => {
  const obj = {};

  for (const num of arr) {
    if (obj[num]) {
      obj[num]++;
    } else obj[num] = 1;
  }

  let max = 0,
    res = -1;

  for (let [key, value] of Object.entries(obj)) {
    if (value > max) {
      max = value;
      res = key;
    }
  }

  for (let [key, value] of Object.entries(obj)) {
    if (value === max && Number(key) > Number(res)) {
      res = key;
    }
  }
  return Number(res);
};

console.log(maxCount([1, 2, 3, 1, 2, 3]));
