// Your mission is to implement a function that converts the following potentially harmful characters:

function htmlspecialchars(formData) {
  const mappings = {
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '&': '&amp;',
  };

  return formData
    .split('')
    .map((c) => mappings[c] || c)
    .join('');
}

function htmlspecialchars(formData) {
  let str = '';
  for (let char of formData) {
    switch (char) {
      case '<':
        str += '&lt;';
        break;
      case '>':
        str += '&gt;';
        break;
      case '"':
        str += '&quot;';
        break;
      case '&':
        str += '&amp;';
        break;
      default:
        str += char;
    }
  }

  return str;
}
