function updateLight(current) {
  return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
}

const updateLight = (current) =>
  ({
    green: 'yellow',
    yellow: 'red',
    red: 'green',
  }[current]);

function updateLight(current) {
  switch (current) {
    case 'green':
      return 'yellow';
    case 'yellow':
      return 'red';
    default:
      return 'green';
  }
}
