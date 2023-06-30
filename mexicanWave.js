// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

function wave(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') continue;
    result.push(str.slice(0, i) + str.charAt(i).toUpperCase() + str.slice(i + 1));
  }
  return result;
}

function wave(str) {
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    let copy = str.split('');
    if (copy[i] !== ' ') {
      copy[i] = copy[i].toUpperCase();
      newArr.push(copy.join(''));
    }
  }
  return newArr;
}

var wave = (w) =>
  [...w].map((a, i) => w.slice(0, i) + a.toUpperCase() + w.slice(i + 1)).filter((a) => a != w);
