function correctPolishLetters(string) {
  let result = '';
  const charsObj = {
    ą: 'a',
    ć: 'c',
    ę: 'e',
    ł: 'l',
    ó: 'o',
    ś: 's',
    ź: 'z',
    ń: 'n',
    ż: 'z',
  };
  const charsArr = ['ą', 'ć', 'ę', 'ł', 'ó', 'ś', 'ź', 'ń', 'ż'];

  for (let i = 0; i < string.length; i++) {
    if (charsArr.includes(string[i])) {
      result += charsObj[string[i]];
    } else {
      result += string[i];
    }
  }

  return result;
}

var mapping = {
  ą: 'a',
  ć: 'c',
  ę: 'e',
  ł: 'l',
  ń: 'n',
  ó: 'o',
  ś: 's',
  ź: 'z',
  ż: 'z',
};

function correctPolishLetters(text) {
  return text
    .split('')
    .map((c) => mapping[c] || c)
    .join('');
}
