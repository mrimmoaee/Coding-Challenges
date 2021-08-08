const nums = [3, 2, 4];
const target = 6;

var findTwoSum = function (nums, target) {
  let sum;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      sum = nums[i] + nums[j];
      if (sum === target) {
        return [i, j];
      }
    }
  }
};

console.log(findTwoSum(nums, target));
