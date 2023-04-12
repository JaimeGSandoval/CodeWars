// We need a function that can transform a string into a number. What ways of achieving this do you know?

const stringToNumber = function (str) {
  return Number(str);
};

const stringToNumber2 = function (str) {
  return +str;
};

const stringToNumber3 = function (str) {
  return parseInt(str);
};
