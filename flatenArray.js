// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

function flattenAndSort(array) {
  const flattenedArr = array.flat();
  const ascendingNumsArr = flattenedArr.sort((a, b) => a - b);
  return ascendingNumsArr;
}

function flattenAndSort(array) {
  return array.flat().sort((a, b) => a - b);
}
