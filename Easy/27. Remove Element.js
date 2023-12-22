/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

const removeElement = function(nums, val) {
	let L = 0;

	for (let R = 0; R < nums.length; R++) {
		if (nums[R] !== val) {
			nums[L] = nums[R];
			L++;
		}
	}

	return L;
};