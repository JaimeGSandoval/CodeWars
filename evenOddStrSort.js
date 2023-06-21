function sortMyString(S) {
  let even = S[0];
  let odd = '';

  for (let i = 1; i < S.length; i++) {
    if (i % 2 === 0) even += S[i];
    else odd += S[i];
  }

  return `${even} ${odd}`;
}
