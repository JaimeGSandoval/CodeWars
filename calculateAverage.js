// Write a function which calculates the average of the numbers in a given list.

function findAverage(array) {
  const total = array.reduce((acc, curr) => acc + curr, 0);
  return !total ? 0 : total / array.length;
}
