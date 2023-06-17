function bump(x) {
  let totalBumps = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] === 'n') totalBumps += 1;
  }

  return totalBumps > 15 ? 'Car Dead' : 'Woohoo!';
}
