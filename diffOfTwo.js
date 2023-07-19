function twosDifference(input) {
  const sorted = input.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < sorted.length; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      if (Math.abs(sorted[i] - sorted[j]) === 2) result.push([sorted[i], sorted[j]]);
    }
  }

  return result;
}

function twosDifference(input) {
  const sorted = input.sort((a, b) => a - b);
  const result = [];
  for (var i = 0; i < sorted.length; ++i)
    if (sorted.indexOf(input[i] + 2) != -1) result.push([input[i], input[i] + 2]);
  return result;
}
