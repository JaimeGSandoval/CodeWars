function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function minimumNumber(numbers) {
  let count = 0;
  let sum = numbers.reduce((a, b) => a + b);

  if (isPrime(sum)) return 0;

  while (!isPrime(sum)) {
    sum++;
    count++;
  }
  return count;
}
