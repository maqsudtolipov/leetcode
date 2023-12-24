/**
 * @param {number[]} nums
 * @return {number[]}
 */

const sortArray = (arr) => {
	if (arr.length === 1) return arr;

	const mid = Math.floor(arr.length / 2);
	const left = arr.slice(0, mid);
	const right = arr.slice(mid);

	return merge(sortArray(left), sortArray(right));
};

const merge = function (left, right) {
	const sortedArr = [];

	while (left.length && right.length) {
		if (left[0] < right[0]) {
			sortedArr.push(left.shift());
		} else {
			sortedArr.push(right.shift());
		}
	}

	return [...sortedArr, ...left, ...right];
};