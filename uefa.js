function uefaEuro2016(teams, scores) {
  const [team1, team2] = teams;
  const [score1, score2] = scores;
  const winner = score1 > score2 ? team1 : team2;

  return score1 === score2
    ? `At match ${team1} - ${team2}, teams played draw.`
    : `At match ${team1} - ${team2}, ${winner} won!`;
}

function uefaEuro2016(teams, scores) {
  var winner = scores[0] > scores[1] ? teams[0] : scores[1] > scores[0] ? teams[1] : null;
  return (
    'At match ' +
    teams[0] +
    ' - ' +
    teams[1] +
    ', ' +
    (winner ? winner + ' won!' : 'teams played draw.')
  );
}

const uefaEuro2016 = (teams, scores) => {
  const result =
    scores[0] === scores[1]
      ? 'teams played draw.'
      : scores[0] > scores[1]
      ? `${teams[0]} won!`
      : `${teams[1]} won!`;

  return `At match ${teams[0]} - ${teams[1]}, ${result}`;
};
