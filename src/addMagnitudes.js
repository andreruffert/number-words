const magnitudes = [
  'thousand',
  'million',
  'billion',
  'trillion',
  'quadrillion'
];

const addMagnitudes = (str, index) => {
  return (str && index) ? `${str} ${magnitudes[index - 1]}` : (str) ? str : '';
};

module.exports = addMagnitudes;
