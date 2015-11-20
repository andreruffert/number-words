const words = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'fourty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety'
};

const toWords = (number) => {
  const result = [];
  if (number < 20) {
    if (number) {
      result.push(words[number]);
    }
  }
  else if (number < 100) {
    result.push(words[Math.floor(number / 10) * 10]);
    if (number % 10) {
      result.push(words[number % 10]);
    }
  }
  else {
    result.push(words[Math.floor(number / 100)]);
    result.push('hundred');
    if (number % 100) {
      result.push(`and ${toWords(number % 100)}`);
    }
  }
  return result.join(' ');
};

export default toWords;
