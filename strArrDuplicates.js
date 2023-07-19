// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

function dup(s) {
  return s.map((word) => {
    return word
      .split('')
      .filter((c, i, arr) => c !== arr[i - 1])
      .join('');
  });
}
