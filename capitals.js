// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

function capitals(word) {
  const result = [];

  word.split('').forEach((char, i) => {
    if (char === char.toUpperCase()) result.push(i);
  });

  return result;
}
