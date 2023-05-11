// You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
  return arr.reduce((acc, curr) => acc + (curr > 0 ? curr : 0), 0);
}

function positiveSum(arr) {
  var total = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      total += arr[i];
    }
  }
  return total;
}
