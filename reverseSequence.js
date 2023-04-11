// 5. Reversed Sequence
// Build a function that returns an array of integers from n to 1 where n>0.

const reverseSeq = (n) => {
  const result = [];

  while (n > 0) {
    result.push(n);
    n--;
  }

  return result;
};
