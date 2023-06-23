// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

var filterString = function (value) {
  let strNums = '';

  for (let i = 0; i < value.length; i++) {
    if (!isNaN(Number(value[i]))) strNums += value[i];
  }

  return parseInt(strNums, 10);
};

var FilterString = function (value) {
  return +value
    .split('')
    .filter((n) => !isNaN(n))
    .join('');
};
