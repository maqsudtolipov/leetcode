/**
 * @param {number} n
 * @return {Function} counter
 */
const createCounter = function(n) {
	let count = n - 1;

	return function() {
		return count += 1;
	};
};