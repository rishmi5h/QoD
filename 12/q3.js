const reverse = (num) => {
  const numArr = num.toString().split("");
  const resultArr = [];

  for (let i = 0; i < numArr.length; i++) {
    resultArr[i] = numArr[numArr.length - i - 1];
  }
  return resultArr.join("");
};

console.log(reverse(32243));
