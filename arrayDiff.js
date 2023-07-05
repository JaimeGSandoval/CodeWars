function arrayDiff(a, b) {
  const result = [];

  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      result.push(a[i]);
    }
  }

  return result;
}

const arrayDiff = (a, b) => a.filter((n) => !b.includes(n));

function arrayDiff(a, b) {
  const hash = new Set([...b]);
  const result = [];

  for (let i = 0; i < a.length; i++) {
    if (!hash.has(a[i])) result.push(a[i]);
  }
  return result;
}

function arrayDiff(a, b) {
  const hash = new Set(b);
  return a.filter((v) => !hash.has(v));
}
