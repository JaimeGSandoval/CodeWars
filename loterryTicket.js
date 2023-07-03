function bingo(ticket, win) {
  let miniWins = 0;

  for (let i = 0; i < ticket.length; i++) {
    for (let j = 0; j < ticket[i][0].length; j++) {
      if (ticket[i][0].charCodeAt(j) === ticket[i][1]) {
        miniWins++;
        break;
      }
    }
  }
  return miniWins >= win ? 'Winner!' : 'Loser!';
}

function bingo(ticket, win) {
  if (ticket.filter((a) => a[0].split('').some((b) => b.charCodeAt(0) == a[1])).length >= win) {
    return 'Winner!';
  }
  return 'Loser!';
}
