/**
 * @param {number[]} nums
 * @return {number}
 */
const minOperations = function (nums) {
  const counter = new Map();
  for (const num of nums) {
    counter.set(num, (counter.get(num) || 0) + 1);
  }

  let ans = 0;
  for (const c of counter.values()) {
    if (c === 1) {
      return -1;
    }
    ans += Math.ceil(c / 3);
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
