// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

function getGrade(...scores) {
  const average = scores.reduce((a, c) => a + c, 0) / scores.length;

  if (average >= 90) return 'A';
  if (average >= 80 && average < 90) return 'B';
  if (average >= 70 && average < 80) return 'C';
  if (average >= 60 && average < 70) return 'D';
  return 'F';
}
