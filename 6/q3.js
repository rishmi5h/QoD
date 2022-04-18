const removeSpace = (str) => {
  const strArr = str.split(" ");
  const resultArr = strArr.map((word) => (word === " " ? "" : word));
  return resultArr.join("");
};
console.log(
  removeSpace("Hi this  is    testing for      multiple space      removal")
);
