const checkPalindrome = (str) => {
  const mid = Math.floor(str.length / 2);
  for (let i = 0; i < mid; i++) {
    if (str[i] !== str[str.length - i - 1]) return "Not a palindrome";
  }
  return "Its a Palindrome";
};

console.log(checkPalindrome("Hi 1 1 iH"));
