const magnitudes = [
  'thousand',
  'million',
  'billion',
  'trillion',
  'quadrillion'
];

const addMagnitudes = (string, index) => (string && index) ? `${string} ${magnitudes[index - 1]}` : string;

export default addMagnitudes;
