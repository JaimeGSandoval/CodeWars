// In this kata you will create a function that takes in a list and returns a list with the reverse order.

function reverseList(list) {
  return list.reverse();
}

function reverseList(list) {
  var array = [];
  for (var i = list.length - 1; i >= 0; i--) {
    array.push(list[i]);
  }
  return array;
}
