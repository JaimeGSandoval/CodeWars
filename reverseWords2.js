// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
  const strArr = str.split(' ');

  let result = [];

  for (let i = 0; i < strArr.length; i++) {
    let reversedWord = '';

    for (let j = strArr[i].length - 1; j >= 0; j--) {
      reversedWord += strArr[i][j];
    }

    result.push(reversedWord);
  }

  return result.join(' ');
}

function reverseWords(str) {
  return str
    .split(' ')
    .map(function (word) {
      return word.split('').reverse().join('');
    })
    .join(' ');
}

function reverseWords(str) {
  return str.split('').reverse().join('').split(' ').reverse().join(' ');
}

function reverseWords(str) {
  let reversedWord = '';
  let reversedStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      reversedWord = str[i] + reversedWord;
    } else {
      reversedStr += reversedWord + ' ';
      reversedWord = '';
    }
  }
  return reversedStr + reversedWord;
}
