// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

function evenNumbers(array, number) {
  return array.filter((n) => !(n % 2)).slice(-number);
}

function evenNumbers(array, number) {
  let arr = [];
  for (let i = array.length - 1; number > 0; i--) {
    if (array[i] % 2 == 0) {
      arr.push(array[i]);
      number--;
    }
  }
  return arr.reverse();
}
