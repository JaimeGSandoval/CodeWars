// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
  const sortedOddNums = array.filter((n) => n % 2).sort((a, b) => b - a);
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2) {
      result.push(sortedOddNums.pop());
    } else {
      result.push(array[i]);
    }
  }

  return result;
}

function sortArray(array) {
  const sortedOddNums = array.filter((n) => n % 2).sort((a, b) => b - a);
  return array.map((x, i, arr) => (arr[i] % 2 ? sortedOddNums.pop() : x));
}
