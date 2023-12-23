/**
 * @param {number} n
 * @return {number}
 */
// JUST FIBONACCI
const fib = function(n) {
	if (n <= 1) return n;

	return fib(n - 1) + fib(n - 2);
};

console.log(fib(25))

// MEMO function
const fib2 = function(n) {
	const brain = {
		0: 0,
		1: 1
	};

	const memoFib = (m) => {
		if (m <= 1) return m;

		if (brain[m]) return brain[m];
		brain[m] = memoFib(m - 1) + memoFib(m - 2);

		return brain[m];
	}

	return memoFib(n);
};
console.log(fib2(25))