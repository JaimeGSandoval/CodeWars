// In this kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

function solve(arr) {
  // Step 1: Create a frequency map
  const frequencyMap = new Map();
  arr.forEach((element) => {
    frequencyMap.set(element, (frequencyMap.get(element) || 0) + 1);
  });

  // Step 2: Sort the array by frequency and value
  arr.sort((a, b) => {
    const frequencyDiff = frequencyMap.get(b) - frequencyMap.get(a);
    if (frequencyDiff === 0) {
      return a - b; // If the frequencies are the same, sort by increasing value
    }
    return frequencyDiff;
  });

  return arr;
}
