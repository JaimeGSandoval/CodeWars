// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

function sumOfMinimums(arr) {
  let result = 0;

  arr.forEach((array) => {
    result += Math.min(...array);
  });

  return result;
}

function sumOfMinimums(arr) {
  return arr.reduce((p, c) => p + Math.min(...c), 0);
}
