/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSumBrute = function(nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums.at(i) + nums.at(j) === target) return [i, j]
		}
	}
};

console.log(twoSumBrute([2,7,11,15], 9))

const twoSum = function(nums, target) {
	const map = new Map();

	for (let i = 0; i < nums.length; i++) {
		const needed = target - nums.at(i);

		if (map.has(needed)) return [i, map.get(needed)]

		map.set(nums[i], i)
	}
}

console.log(twoSum([2,7,11,15], 9))