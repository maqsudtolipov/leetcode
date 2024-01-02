/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// comments are based on TC [1,3,4,1,2,3,1]
const findMatrix = function (nums) {
  const map = {};

  // Count occurrence of each number
  for (const num of nums) {
    if (map[num]) {
      map[num] += 1;
    } else {
      map[num] = 1;
    }
  }
  console.log(map);

  // map = { '1': 1, '2': 3, '5': 1, '6': 1, '8': 1, '9': 1, '10': 2 }

  const result = [];

  for (const num in map) {
    let count = map[num];

    for (let i = 0; i < count; i++) {
      if (result[i]) result[i].push(num);
      else result[i] = [num];
    }
  }

  return result;
  /*
	[1,  2, 5, 6, 8, 9, 10]
	[2, 10]
	[2]
	 */
};

// console.table(findMatrix([1]));
console.table(findMatrix([1, 3, 4, 1, 2, 3, 1]));
