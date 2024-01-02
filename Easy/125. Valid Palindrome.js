/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  const str = s.toLowerCase().replace(/[^A-Za-z0-9]+/g, "");

  let L = 0;
  let R = str.length - 1;

  while (L < R) {
    if (str.charAt(L) !== str.charAt(R)) return false;

    L++;
    R--;
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome("0P"));
