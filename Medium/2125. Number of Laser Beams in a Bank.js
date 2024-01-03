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

const numberOfBeamsOP = (bank) =>
  [0, ...bank.map((row) => row.split("").filter((e) => e === "1").length)]
    .filter((e) => e !== 0)
    .map(
      (e, i, arr) =>
        i !== arr.length - 1 && arr.slice(i, i + 2).reduce((a, c) => a * c),
    )
    .reduce((a, c) => a + c);

console.log(numberOfBeamsOP(["011001", "000000", "010100", "001000"]));
