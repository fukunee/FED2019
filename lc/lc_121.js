const maxProfit = function (prices) {
    let dp0 = -prices[0];
    let dp1 = 0;
    for (let i = 0; i < prices.length; i++) {
        dp0 = Math.max(dp0, -prices[i]);
        dp1 = Math.max(dp0 + prices[i], dp1);
    }
    return dp1;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));