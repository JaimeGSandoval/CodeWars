// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x) {
  let realNums = 0;
  let strNums = 0;

  for (let n of x) {
    if (typeof n === 'string') strNums += +n;
    else realNums += n;
  }

  return realNums - strNums;
}

function divCon(x) {
  return x.reduce((acc, cur) => (typeof cur === 'number' ? acc + cur : acc - Number(cur)), 0);
}

function divCon(x) {
  var s = 0;
  for (let i = 0; i < x.length; i++) {
    var n = x[i];
    if (Number.isInteger(n)) s += n;
    else s -= parseInt(n);
  }
  return s;
}
