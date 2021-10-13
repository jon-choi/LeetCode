/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = nums.length - 1;

  while (i > 0) {
    if (nums[i] === nums[--i]) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};
