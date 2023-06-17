const greet = (name) => {
  const formattedName = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
  return `Hello ${formattedName}!`;
};

var greet = function (name) {
  return 'Hello ' + name[0].toUpperCase() + name.slice(1).toLowerCase() + '!';
};
