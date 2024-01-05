/**
 * @param {number[]} prices
 * @return {number}
 */
// First try
const maxProfit = function (prices) {
  let profit = 0;
  let min = prices[0];
  let lastProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      if (lastProfit > profit) profit = lastProfit;

      min = prices[i];
      lastProfit = 0;
    } else {
      lastProfit = Math.max(lastProfit, prices[i] - min);
    }
  }

  return Math.max(lastProfit, profit);
};

const maxProfitOptimal = function (prices) {
  let profit = 0;
  let min = Infinity;

  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    profit = Math.max(profit, prices[i] - min);
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfitOptimal([2, 4, 1]));
