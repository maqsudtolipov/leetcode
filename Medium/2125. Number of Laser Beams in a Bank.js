/**
 * @param {string[]} bank
 * @return {number}
 */
const numberOfBeams = function (bank) {
  let all = 0;
  let prev = 0;

  for (const floor of bank) {
    let count = 0;

    for (let i = 0; i < floor.length; i++) {
      if (floor.at(i) === "1") count += 1;
    }

    if (count > 0) {
      all += prev * count;
      prev = count;
    }
  }

  return all;
};

console.log(numberOfBeams(["011001", "000000", "010100", "001000"]));
