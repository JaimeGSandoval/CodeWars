// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
  const hash = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  let currentWord = '';
  let max = -Infinity;
  let currentVal = 0;
  let wordArr = [];
  let result = '';

  for (let i = 0; i <= x.length; i++) {
    if (x[i] === ' ' || i === x.length) {
      wordArr.push([currentWord, currentVal]);
      currentVal = 0;
      currentWord = '';
    } else {
      currentWord += x[i];
      currentVal += hash[x[i]];
    }
  }

  for (let j = 0; j < wordArr.length; j++) {
    if (wordArr[j][1] > max) {
      result = wordArr[j][0];
      max = wordArr[j][1];
    }
  }

  return result;
}

function high(s) {
  let as = s.split(' ').map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
}
