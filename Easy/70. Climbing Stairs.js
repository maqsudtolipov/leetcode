/**
 * @param {number} n
 * @return {number}
 */
//  Recursion
const climbStairs = function(n) {

	if (n <= 2) return n;

	return climbStairs(n - 1) + climbStairs(n - 2)
};

const result = climbStairs(15);
console.log(result)

// MEMO
const climbStairs = function(n) {
	const brain = {};

	const climbWithMemo = (c) => {
		if (c <= 2) return c;
		if (brain[c]) return brain[c];

		brain[c] = climbWithMemo(c - 1) + climbWithMemo(c - 2);

		return brain[c]
	}

	return climbWithMemo(n)
};