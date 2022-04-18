const numOfChar = (str) => {
  const strArr = str.split("");
  let blankCount = 0;
  for (const val of strArr) {
    if (val === " ") blankCount++;
  }
  const arrCount = strArr.length;
  return arrCount - blankCount;
};

console.log(numOfChar("hi i am rishabh"));
