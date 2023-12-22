/**
 * @param {number[]} nums
 * @return {number}
 */

const removeDuplicates = function(nums) {
	let L = 0;

	for(let R = 1; R < nums.length; R++) {
		if (nums[L] !== nums[R]) {
			L++;
			nums[L] = nums[R];
		}
	}

	return L + 1;
};