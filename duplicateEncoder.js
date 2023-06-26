// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word) {
  const lower = word.toLowerCase();
  let hash = {};
  let result = '';

  for (let i = 0; i < lower.length; i++) {
    hash[lower[i]] = hash[lower[i]] + 1 || 1;
  }

  for (let j = 0; j < lower.length; j++) {
    result += hash[lower[j]] === 1 ? '(' : ')';
  }

  return result;
}
