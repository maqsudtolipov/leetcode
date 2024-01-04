/**
 * @param {number[]} nums
 * @return {number}
 */
const minOperations = function (nums) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let ans = 0;
  for (const val of map.values()) {
    if (val < 2) return -1;

    if (val % 3 === 0) {
      ans += val / 3;
    }
  }

  return ans;
};

console.log(minOperations([2, 3, 3, 2, 2, 4, 2, 3, 4]));
console.log(minOperations([2, 2]));
// console.log(minOperations([2, 1, 2, 2, 3, 3]));
// console.log(
//   minOperations([
//     14, 12, 14, 14, 12, 14, 14, 12, 12, 12, 12, 14, 14, 12, 14, 14, 14, 12, 12,
//   ]),
// );
// console.log(
//   minOperations([19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19]),
// );
