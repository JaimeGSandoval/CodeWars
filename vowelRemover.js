// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

function shortcut(string) {
  const vowels = { a: 'a', e: 'e', i: 'i', o: 'o', u: 'u' };
  let result = string;

  for (let i = 0; i < string.length; i++) {
    if (vowels[string[i]]) result = result.replace(string[i], '');
  }

  return result;
}

function shortcut(string) {
  return string
    .split('')
    .filter((letter) => !'aeiou'.includes(letter))
    .join('');
}
