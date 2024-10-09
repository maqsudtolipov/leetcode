const guessNumber = function(n) {
  let r = n,
  l = 1;

  while (l <= r) {
    let myGuess = Math.round((r + l) / 2);
    let res = guess(myGuess);

    if (res === 0) return myGuess;
    else if (res === 1) {
      l = myGuess + 1;
    } else if (res === -1) {
      r = myGuess - 1;
    }
  }
};

// O(log n)