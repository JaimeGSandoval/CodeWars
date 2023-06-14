// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

function myLanguages(results) {
  const sorted = Object.entries(results).sort((a, b) => b[1] - a[1]);
  const result = [];

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i][1] >= 60) result.push(sorted[i][0]);
  }

  return result;
}

function myLanguages(results) {
  const result = [];
  Object.entries(results)
    .sort((a, b) => b[1] - a[1])
    .filter((el, i) => el[1] >= 60)
    .forEach((z) => result.push(z[0]));
  return result;
}

const myLanguages = (results) =>
  Object.entries(results)
    .filter(([name, points]) => points >= 60)
    .sort(([name1, points1], [name2, points2]) => points2 - points1)
    .map(([name, points]) => name);
