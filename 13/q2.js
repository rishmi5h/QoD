const simpleInterest = (P, R, T) =>
  `Simple interest with Principal ${P}, Rate ${R} and Time ${T} is ${
    (P * R * T) / 100
  }`;

console.log(simpleInterest(100, 6, 2));
