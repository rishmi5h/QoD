const encodeString = (str, numOfPlaces) => {
  const arr = str.split("");
  const resultCharCode = arr.map((item) => item.charCodeAt() + numOfPlaces);
  const resultArr = resultCharCode.map((item) => String.fromCharCode(item));
  const resultStr = resultArr.join("");
  return resultStr;
};

console.log(encodeString("neogcamp", 2));
