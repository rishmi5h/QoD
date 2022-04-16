const replaceChar = (str, c1, c2) =>
  str
    .split("")
    .map((char) => (char === c1 ? (char = c2) : char))
    .join("");

console.log(replaceChar("Hi i am rishabh", "i", "t"));
