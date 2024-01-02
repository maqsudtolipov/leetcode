/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  let L = 0,
    R = nums.length - 1;

  while (L < R) {
    if (nums[L] + nums[R] > target) {
      R--;
    } else if (nums[L] + nums[R] < target) {
      L++;
    } else {
      return [L, R];
    }
  }
};

console.log(twoSum([2, 5, 7, 11, 15], 9));
