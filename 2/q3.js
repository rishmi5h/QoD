const toSentenceCase = (str) => {
  const wordArr = str.split(" ");
  const capitalisedWordArr = wordArr.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const result = capitalisedWordArr.join(" ");
  console.log(result);
};

toSentenceCase("we are neoGrammers");

str
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
