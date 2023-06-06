// Given an integer n and two other values, build an array of size n filled with these two values alternating.

function alternate(n, firstValue, secondValue) {
  const result = [];

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) result.push(firstValue);
    else result.push(secondValue);
  }

  return result;
}

function alternate(n, firstValue, secondValue) {
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(i % 2 === 0 ? firstValue : secondValue);
  }
  return array;
}
