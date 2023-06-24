var flatten = function (array) {
  return array.flat();
};

var flatten = function (array) {
  const result = [];

  array.forEach((arr) => {
    if (!Array.isArray(arr)) result.push(arr);
    else arr.forEach((el) => result.push(el));
  });

  return result;
};

const flatten = (array) => [].concat(...array);
