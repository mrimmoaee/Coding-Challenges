let nums = [3, 2, 2, 3];
let val = 3;

var removeElement = function (nums, val) {
  let r = 0;
  let i = 0;

  while (i < nums.length) {
    if (nums[i] != val) {
      nums[r] = nums[i];
      r += 1;
    }
    i += 1;
  }
  return r;
};

console.log(removeElement(nums, val));
