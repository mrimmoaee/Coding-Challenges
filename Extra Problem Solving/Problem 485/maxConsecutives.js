var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let largestCount = 0;

  for (i = 0; i < nums.length; i++) {
    nums[i] === 0 ? (count = 0) : count++;

    if (count > largestCount) largestCount = count;
  }

  return largestCount;
};
