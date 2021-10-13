/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = nums.length;

  while (i > -1) {
    let currentNum = nums[i];
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(currentNum);
    }
    i--;
  }
  return nums;
};
