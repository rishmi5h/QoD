const maskLastFour = (str) => {
  const suffix = str.substr(str.length - 4, str.length - 1);
  const maskedPrefix = "#".repeat(str.length - 4);
  const resultStr = maskedPrefix + suffix;
  return resultStr;
};

console.log(maskLastFour("123455555555552345678"));
