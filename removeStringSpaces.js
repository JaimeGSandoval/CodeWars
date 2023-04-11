// Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x) {
  return x.split(' ').join('');
}

function noSpace(x) {
  let result = '';

  for (let i = 0; i < x.length; i++) {
    result += x[i].trim();
  }

  return result;
}
