// Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.

function sortArray(a1, a2) {
  const result = [];

  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      if (a2[j].startsWith(a1[i][0])) {
        result.push(a2[j]);
      }
    }
  }

  return result;
}

const sortArray = (a1, a2) => a1.map((v) => a2.find((w) => v[0] === w[0]));
