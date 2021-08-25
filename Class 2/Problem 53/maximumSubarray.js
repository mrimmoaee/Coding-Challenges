var maxSubArray = function (nums) {
  let currentSum = 0;
  let totalSum = nums[0];

  for (const value of nums) {
    currentSum = Math.max(currentSum + value, value);
    totalSum = Math.max(totalSum, currentSum);
  }

  return totalSum;
};
