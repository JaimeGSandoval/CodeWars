// zipWith ( or zip_with ) takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
// The function value is one new array.

// If the arrays are of unequal length, the output will only be as long as the shorter one.
// (Values of the longer array are simply not used.)

// Inputs should not be modified.

function zipWith(fn, a0, a1) {
  const arrLen = a0.length > a1.length ? a1.length : a0.length;
  const result = [];

  for (let i = 0; i < arrLen; i++) {
    result.push(fn(a0[i], a1[i]));
  }

  return result;
}

function zipWith(fn, a0, a1) {
  const result = [];
  const min = Math.min(a0.length, a1.length);

  for (var i = 0; i < min; i++) {
    result.push(fn(a0[i], a1[i]));
  }
  return result;
}
