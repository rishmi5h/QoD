const sumOfDigits = (num) => {
  const numArr = num.toString().split("");
  const sum = numArr.reduce((acc, cumm) => Number(acc) + Number(cumm), 0);
  return sum;
};

console.log(sumOfDigits(1234));
