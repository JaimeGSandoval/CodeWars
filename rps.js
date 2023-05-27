const rps = (p1, p2) => {
  if (p1 === p2) return 'Draw!';

  const outcomes = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock',
  };

  return p1 === outcomes[p2] ? 'Player 2 won!' : 'Player 1 won!';
};
