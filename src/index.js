import getReverseNumberParts from './getReverseNumberParts';
import toWords from './toWords';
import addMagnitudes from './addMagnitudes';

const convert = (number) => {
  if (number > (Math.pow(2, 53) - 1)) {
    return 'Maximum safe integer in JavaScript exceeded';
  }
  return getReverseNumberParts(number)
    .map(toWords)
    .map(addMagnitudes)
    .reverse()
    .join(' ')
    .trim();
};

export { convert };
