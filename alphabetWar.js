function alphabetWar(fight) {
  let leftSide = 0;
  let rightSide = 0;
  const leftHash = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
  };

  const rightHash = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
  };

  for (let i = 0; i < fight.length; i++) {
    if (leftHash[fight[i]]) leftSide += leftHash[fight[i]];
    if (rightHash[fight[i]]) rightSide += rightHash[fight[i]];
  }

  if (leftSide > rightSide) return 'Left side wins!';
  else if (rightSide > leftSide) return 'Right side wins!';
  else return "Let's fight again!";
}
