// Given an array, remove all falsy values from the array and return an array of only truthy values.

function falsyBouncer(array) {
  let result = [];
  //loop through with each array value
  for (value of array) {
    // push into result if truthy
    if (value) {
      result.push(value);
    }
  }
  return result;
}

function falsyBouncer(array) {
  return array.filter((value) => {
    return Boolean(value);
  });
}
