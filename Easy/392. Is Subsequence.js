/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
  for (let T = 0, B = 0; B < t.length; B++) {
    if (s[T] === t[B]) T++;

    if (s.length === T) return true;
  }

  return false;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
