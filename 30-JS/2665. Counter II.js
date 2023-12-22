/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = function(init) {
	let current = init;

	return {
		increment: () => current += 1,
		decrement: () => current -= 1,
		reset: () => current = init
	}
};