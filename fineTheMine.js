// Write a function mineLocation/MineLocation that accepts a 2D array, and returns the location of the mine. The mine is represented as the integer 1 in the 2D array. Areas in the 2D array that are not the mine will be represented as 0s.

function mineLocation(field) {
  const row = field.findIndex((arr) => arr.indexOf(1) !== -1);
  const mine = field[row].indexOf(1);
  return [row, mine];
}
