// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending) {
  return str.endsWith(ending);
}

function solution2(str, ending) {
  return str.substr(-ending.length) == ending;
}
