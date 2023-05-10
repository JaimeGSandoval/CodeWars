// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

const isVow = (a) => a.map((x) => ('aeiou'.includes((y = String.fromCharCode(x))) ? y : x));

function isVow(a) {
  return a.map((i) => {
    if (String.fromCharCode(i) === 'a') return 'a';
    else if (String.fromCharCode(i) === 'e') return 'e';
    else if (String.fromCharCode(i) === 'i') return 'i';
    else if (String.fromCharCode(i) === 'o') return 'o';
    else if (String.fromCharCode(i) === 'u') return 'u';
    else return i;
  });
}

function isVow(a) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return a.map((code) =>
    vowels.includes(String.fromCharCode(code)) ? String.fromCharCode(code) : code
  );
}
