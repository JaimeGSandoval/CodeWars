// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

function adjacentElementsProduct(array) {
  let max = array[0] * array[1];
  let current = 0;

  for (let i = 1; i < array.length - 1; i++) {
    current = array[i] * array[i + 1];
    if (current > max) max = current;
  }

  return max;
}

function adjacentElementsProduct(array) {
  let newArr = [];
  for (i = 0; i < array.length - 1; i++) {
    newArr.push(array[i] * array[i + 1]);
  }
  return Math.max(...newArr);
}

function adjacentElementsProduct(a) {
  return Math.max(...a.map((x, i) => x * a[i + 1]).slice(0, -1));
}
