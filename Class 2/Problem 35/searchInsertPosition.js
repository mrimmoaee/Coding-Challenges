let nums = [1, 3, 5, 6];
let target = 5;

var searchInsert = function (nums, target) {
  if (nums.includes(target)) {
    return nums.indexOf(target);
  } else {
    nums.push(target);
    nums.sort(function (a, b) {
      return a - b;
    });
    console.log(nums);
    return nums.indexOf(target);
  }
};
