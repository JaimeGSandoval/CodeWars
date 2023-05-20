// Write a method, that will get an integer array as parameter and will process every number from this array. Return a new array with processing every number of the input-array like this:
// If the number has an integer square root, take this, otherwise square the number.

function squareOrSquareRoot(array) {
  return array.map((x) => {
    const n = Math.sqrt(x);
    return Number.isInteger(n) ? n : x * x;
  });
}

function squareOrSquareRoot(array) {
  return array.map((x) => {
    const n = Math.sqrt(x);
    return Number.isInteger(n) ? n : Math.pow(x, 2);
  });
}
