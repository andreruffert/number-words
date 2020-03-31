const getReverseNumberParts = number => {
  const parts = [];
  let int = Math.trunc(number);
  while (int > 0) {
    parts.push(int % 1000);
    int = Math.floor(int / 1000);
  }

  return parts;
};

export default getReverseNumberParts;
