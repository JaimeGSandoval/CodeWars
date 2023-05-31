// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
  const numsArr = numbers.split(' ');
  const sortedNums = numsArr.sort((a, b) => a - b);

  return `${sortedNums[sortedNums.length - 1]} ${sortedNums[0]}`;
}

function highAndLow(numbers) {
  const sortedNums = numbers.split(' ').sort((a, b) => a - b);
  return `${sortedNums[sortedNums.length - 1]} ${sortedNums[0]}`;
}

function highAndLow(numbers) {
  const numsArr = numbers.split(' ');
  return `${Math.max(...numsArr)} ${Math.min(...numsArr)}`;
}
