var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m, ...nums2);
  nums1.sort(function (a, b) {
    return a - b;
  });

  console.log(nums1);

  return nums1;
};
