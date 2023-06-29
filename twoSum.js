function twoSum(numbers, target) {
  let i = 0;
  let j = 1;

  while (i < numbers.length - 1) {
    if (numbers[i] + numbers[j] === target) return [i, j];

    if (j === numbers.length - 1) {
      i++;
      j = i + 1;
    } else {
      j++;
    }
  }
}

function twoSum(numbers, target) {
  const hash = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const diff = target - numbers[i];
    if (hash.has(diff)) return [i, hash.get(diff)];
    else hash.set(numbers[i], i);
  }
}
