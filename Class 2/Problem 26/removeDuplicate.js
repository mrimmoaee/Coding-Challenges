let nums = [1, 1, 2];

var removeDuplicate = function (nums) {
  let j = 0;
  let i = 0;

  for (j = 0; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
};

console.log(removeDuplicate(nums));
