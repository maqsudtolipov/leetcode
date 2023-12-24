/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 😖 Brute force
const containsDuplicate1 = function(nums) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums.at(i) === nums.at(j)) return true;
		}
	}

	return false;
}

console.log(containsDuplicate1([1,2,3,1]))

// Optimal
const containsDuplicate = function(nums) {
	const map = {};

	for (let i = 0; i < nums.length; i++) {
		// IF we have seen this before return true
		if (map[nums[i]]) return true;
		else map[nums[i]] = 1;
	}

	return true;
}

console.log(containsDuplicate([1,2,3,1]))