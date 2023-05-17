function warnTheSheep(q) {
  return q[q.length - 1] === 'wolf'
    ? 'Pls go away and stop eating my sheep'
    : `Oi! Sheep number ${
        q.length - (q.indexOf('wolf') + 1)
      }! You are about to be eaten by a wolf!`;
}

function warnTheSheep(queue) {
  const position = queue.reverse().indexOf('wolf');
  return position === 0
    ? 'Pls go away and stop eating my sheep'
    : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}
