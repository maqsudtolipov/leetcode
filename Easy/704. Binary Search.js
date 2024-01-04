/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  let L = 0,
    R = nums.length - 1;

  while (L <= R) {
    let mid = Math.floor((L + R) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      R = mid - 1;
    } else {
      L = mid + 1;
    }
  }

  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
