/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let child = 0;

  for (const cookie of s) {
    if (cookie >= g[child]) child++;
  }

  return child;
};

console.log(findContentChildren([1, 2, 3], [1, 1]));
