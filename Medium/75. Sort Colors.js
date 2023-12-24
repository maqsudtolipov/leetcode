/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function(nums) {
	const buckets = [0, 0, 0]; // 🔴, ⚪️, 🔵

	for (let i = 0; i < nums.length; i++) {
		buckets[nums[i]] += 1;
	}

	let k = 0;
	for (let i = 0; i < buckets.length; i++) {
		for (let j = 0; j < buckets[i]; j++) {
			nums[k] = i;
			k++;
		}
	}

	return nums;
};

console.log(sortColors([2,0,2,1,1,0,2]))
