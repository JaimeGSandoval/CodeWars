// Implement a function which convert the given boolean value into its string representation.

function booleanToString(b) {
  return !b ? 'false' : 'true';
}

function booleanToString2(b) {
  return b.toString();
}

function booleanToString3(b) {
  return String(b);
}

function booleanToString4(b) {
  return `${b}`;
}
