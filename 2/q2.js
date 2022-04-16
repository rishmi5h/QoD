const indexOf = (arr, item) => {
  let index;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == item) index = i;
  }
  return index;
};

console.log(indexOf([1, 6, 3, 5, 8, 9], 3));
