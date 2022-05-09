const nonRepeatingChar = (str) => {
  const obj = {};
  for (const char of str) {
    if (obj[char]) {
      obj[char] = obj[char] + 1;
    } else obj[char] = 1;
  }

  for (const char in obj) {
    if (obj[char] === 1) {
      return char;
    }
  }
  return -1;
};

console.log(nonRepeatingChar("nneeooggccaammpp"));
