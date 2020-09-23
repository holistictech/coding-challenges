// 09.19.2020 Best Time to Buy and Sell Stock II
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    for(let i=1; i<prices.length; i++){
        let diff = prices[i]-prices[i-1];
        if(diff > 0){
            profit += diff;
        }
    }
    return profit;
};

// 09.20.2020 Leetcode Cells with Odd Values in a Matrix
// https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/

/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (n, m, indices) {
  const row = new Array(n).fill(0)
  const col = new Array(m).fill(0)
  for (let i = 0; i < indices.length; i++) {
    row[indices[i][0]]++;
    col[indices[i][1]]++;
  }
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if ((row[i] + col[j]) % 2 !== 0) {
        count++;
      }
    }
  }
  return count;
};

// 09.21.2020 Leetcode Decompress Run-Length Encoded List
// https://leetcode.com/problems/decompress-run-length-encoded-list/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  const res = [];

  for (let i = 0; i < nums.length; i += 2) {
    for (let j = 0; j < nums[i]; j++) {
      res.push(nums[i + 1])
    }
  }

  return res;
};

// 09.22.2020 Leetcode Lucky Numbers in a Matrix
// https://leetcode.com/problems/lucky-numbers-in-a-matrix/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
  let minRow = [], maxCol = []

  for(let i in matrix) {
    minRow.push(Math.min.apply(null, matrix[i]))
  }

  for(let i in matrix[0]) {
    let max = 0

    for(let j in matrix){
      if(matrix[j][i] > max) {
        max = matrix[j][i]
      }
    }

    maxCol.push(max)
  }

  return minRow.filter(n => maxCol.includes(n))
}
