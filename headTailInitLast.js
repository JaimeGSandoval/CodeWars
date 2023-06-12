// Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems!

function head(arr) {
  return arr[0];
}

function tail(arr) {
  return arr.slice(1);
}

function init(arr) {
  return arr.slice(0, -1);
}

function last(arr) {
  return arr[arr.length - 1];
}
