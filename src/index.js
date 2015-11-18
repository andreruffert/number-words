const convert = (number) => {
  if (number > (Math.pow(2, 53) - 1)) {
    return 'Maximum safe integer in JavaScript exceeded';
  }
  return require('./getReverseNumberParts')(number)
    .map(require('./toWords'))
    .map(require('./addMagnitudes'))
    .reverse()
    .join(' ')
    .trim();
};

module.exports = { convert };
