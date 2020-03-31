import getReverseNumberParts from './get-reverse-number-parts';
import toWords from './to-words';
import addMagnitudes from './add-magnitudes';

const convert = number => {
  if (number > ((2 ** 53) - 1)) {
    return 'Maximum safe integer in JavaScript exceeded';
  }

  return getReverseNumberParts(number)
    .map(toWords)
    .map(addMagnitudes)
    .reverse()
    .join(' ')
    .trim();
};

export {convert};
