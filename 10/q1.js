const profitOrLoss = (costPrice, sellingPrice) => {
  const margin = costPrice - sellingPrice;
  return `${Math.abs(margin)} ${margin > 0 ? "Loss" : "Profit"}`;
};

console.log(profitOrLoss(3125, 1125));
