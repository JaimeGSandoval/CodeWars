const humanYearsCatYearsDogYears = function (humanYears) {
  let cat = 15;
  let dog = 15;

  for (let i = 2; i <= humanYears; i++) {
    if (i === 2) {
      cat += 9;
      dog += 9;
    } else {
      cat += 4;
      dog += 5;
    }
  }

  return [humanYears, cat, dog];
};
