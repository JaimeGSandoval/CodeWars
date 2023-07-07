// Given a string of text, find and return the most recurring character.

let charMap = {};

for (let char of text) {
  if (charMap.hasOwnProperty(char)) {
    charMap[char]++;
  } else {
    charMap[char] = 1;
  }
}

function maxRecurringChar(text) {
  let charMap = {};
  let maxCharValue = 0;
  let maxChar = '';

  for (let char of text) {
    if (charMap.hasOwnProperty(char)) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > maxCharValue) {
      maxCharValue = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}
