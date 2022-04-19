const reverseWordsInStr = (str) => {
  const strArr = str.split(" ");
  let resultArr = [];
  for (let i = 0; i < strArr.length; i++) {
    resultArr[i] = strArr[strArr.length - i - 1];
  }
  return resultArr.join(" ");
};

console.log(reverseWordsInStr("Hi i am rishabh"));
