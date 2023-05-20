// Your task is to sum the differences between consecutive pairs in the array in descending order.

function sumOfDifferences(arr) {
  const sorted = arr.sort((a, b) => b - a);

  let result = 0;

  for (let i = 0; i < sorted.length - 1; i++) {
    result += arr[i] - arr[i + 1];
  }

  return result;
}
