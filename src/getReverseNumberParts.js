const getReverseNumberParts = (number) => {
  const parts = [];
  while (number > 0) {
    parts.push(number % 1000);
    number = Math.floor(number / 1000);
  }
  return parts;
};

module.exports = getReverseNumberParts;
