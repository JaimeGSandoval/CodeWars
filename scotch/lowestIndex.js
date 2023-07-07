// Return the lowest index at which a value (second argument) i.e **num** should be inserted into an array (first argument) i.e **arr** once it has been sorted. The returned value should be a number.

function whereIBelong(arr, num) {
  arr.sort((a, b) => {
    return a - b;
  });
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length;
}

function whereIBelong(arr, num) {
  arr.sort((a, b) => {
    return a - b;
  });
  let counter = 0;
  while (num > arr[counter]) {
    counter++;
  }
  return counter;
}

function whereIBelong(arr, num) {
  arr.push(num);
  arr.sort((a, b) => a - b);
  return arr.indexOf(num);
}
