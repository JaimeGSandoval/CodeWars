// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

function highestRank(arr) {
  const hash = {};
  let max = 0;
  let result = 0;

  arr.forEach((n) => {
    hash[n] = hash[n] + 1 || 1;
  });

  for (let n in hash) {
    if (hash[n] > max) {
      result = +n;
      max = hash[n];
    }

    if (hash[n] === max && +n > result) {
      result = +n;
      max = hash[n];
    }
  }

  return result;
}

function highestRank(arr) {
  return arr.sort(
    (a, b) => arr.filter((i) => i === b).length - arr.filter((i) => i === a).length
  )[0];
}
