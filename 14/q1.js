const keyValueInversion = (obj) => {
  const newObj = {};
  for (const i in obj) {
    newObj[obj[i]] = i;
  }
  return newObj;
};

console.log(keyValueInversion({ 3: "1", 4: "2" }));

function invert(obj) {
  const res = {};
  for (let [key, value] of Object.entries(obj)) {
    res[value] = key;
  }
  return res;
}
