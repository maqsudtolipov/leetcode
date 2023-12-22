/**
 * @param {string[]} operations
 * @return {number}
 */
const calPoints = function(operations) {
	const records = [];

	for (let i = 0; i < operations.length; i++) {
		if (operations.at(i) === '+') {
			records.push(+records.at(-1) + records.at(-2));
		} else if (operations.at(i) === 'D') {
			records.push(+records.at(-1) * 2);
		} else if (operations.at(i) === 'C') {
			records.pop();
		} else {
			records.push(+operations.at(i))
		}
	}

	return records.reduce((a, b) => a + b, 0);
};