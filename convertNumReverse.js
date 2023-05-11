// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  return n
    .toString()
    .split('')
    .map((n) => +n)
    .reverse();
}

function digitize(n) {
  return Array.from(String(n), Number).reverse();
}

function digitize(n) {
  return String(n).split('').map(Number).reverse();
}
