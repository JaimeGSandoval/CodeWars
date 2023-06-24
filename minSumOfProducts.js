// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

function minSum(arr) {
  let lowestSum = 0;
  let i = 0;
  let j = arr.length - 1;

  const ascNums = arr.sort((a, b) => a - b);

  while (i < j) {
    lowestSum += ascNums[i] * ascNums[j];
    i++;
    j--;
  }

  return lowestSum;
}
function minSum(arr) {
  return arr
    .sort((a, b) => a - b)
    .slice(0, arr.length / 2)
    .reduce((acc, curr, index) => (acc += curr * arr[arr.length - index - 1]), 0);
}

function minSum(arr) {
  let sum = 0;
  let array = [...arr].sort((a, b) => a - b);
  while (array.length) sum += array.pop() * array.shift();
  return sum;
}
