/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
	if (s.length % 2 !== 0) return false;

	const pairs = {
		')': '(',
		'}': '{',
		']': '['
	}

	const stack = [];

	for (let i = 0; i < s.length; i++) {
		const cur = s[i]

		if (cur === '[' || cur === '(' || cur === '{') stack.push(cur)
		else if (pairs[cur] !== stack.pop()) return false;
	}

	return !stack.length;
};