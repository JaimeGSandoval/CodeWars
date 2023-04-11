// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let result = 0;
  const vowels = {
    a: 'a',
    e: 'e',
    i: 'i',
    o: 'o',
    u: 'u',
  };

  for (let i = 0; i < str.length; i++) {
    if (vowels[str[i]]) result++;
  }

  return result;
}

function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

function getCount(str) {
  return str.split('').filter((c) => 'aeiou'.includes(c)).length;
}
