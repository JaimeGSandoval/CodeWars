// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
  let result = '';

  for (let i = 0; i < cc.length - 4; i++) {
    result += '#';
  }

  return result + cc.slice(-4);
}

function maskify(cc) {
  return '#'.repeat(cc.slice(0, -4).length) + cc.slice(-4);
}

function maskify(cc) {
  return cc.slice(-4).padStart(cc.length, '#');
}
