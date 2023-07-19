// You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.

function sumConsecutives(s) {
  let sum = 0;
  let sums = [];

  for (let i = 0; i < s.length; i++) {
    sum += s[i];
    if (s[i] !== s[i + 1]) {
      sums.push(sum);
      sum = 0;
    }
  }

  return sums;
}
