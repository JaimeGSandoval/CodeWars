// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
  const lowered = text.toLowerCase();
  const hash = {};
  let result = 0;

  for (let i = 0; i < lowered.length; i++) {
    hash[lowered[i]] = hash[lowered[i]] + 1 || 1;
  }

  for (let n in hash) {
    if (hash[n] > 1) result++;
  }

  return result;
}
