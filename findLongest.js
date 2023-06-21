// Find the number with the most digits. If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array) {
  const sorted = array.map((n) => n.toString()).sort((a, b) => a.length - b.length);
  const mostDigits = sorted[sorted.length - 1];

  for (let i = 0; i < array.length; i++) {
    if (array[i].toString().length === mostDigits.length) {
      return Number(array[i]);
    }
  }

  return Number(mostDigits);
}

function findLongest(array) {
  return array.reduce((res, curr) => (String(res).length < String(curr).length ? curr : res));
}
