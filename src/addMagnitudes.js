const magnitudes = [
  'thousand',
  'million',
  'billion',
  'trillion',
  'quadrillion'
];

const addMagnitudes = (str, index) => (str && index) ? `${str} ${magnitudes[index - 1]}` : str;

export default addMagnitudes;
