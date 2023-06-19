// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

function switcheroo(x) {
  let result = '';
  const hash = { a: 'b', b: 'a' };

  for (let i = 0; i < x.length; i++) {
    result += hash[x[i]] ? hash[x[i]] : x[i];
  }

  return result;
}

function switcheroo(x) {
  return [...x].map((v) => (v == 'a' ? (v = 'b') : v == 'b' ? (v = 'a') : v)).join('');
}
