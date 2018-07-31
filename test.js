require('babel-core/register');

const test = require('tape');
const numberWords = require('./src');

test('1 - 19', t => {
  const cases = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
  ];

  t.plan(cases.length);

  cases.forEach((currentValue, index) => {
    const number = index + 1;
    const expectedString = currentValue;
    t.is(numberWords.convert(number), expectedString, `numberWords.convert(${number}) should return "${expectedString}"`);
  });

  t.end();
});

test('20 - 99', t => {
  const cases = {
    21: 'twenty one',
    42: 'forty two',
    99: 'ninety nine'
  };

  t.plan(Object.keys(cases).length);

  Object.keys(cases).forEach((number) => {
    const expectedString = cases[number];
    t.is(numberWords.convert(number), expectedString, `numberWords.convert(${number}) should return "${expectedString}"`);
  });

  t.end();
});

test('100 - 999', t => {
  const cases = {
    100: 'one hundred',
    101: 'one hundred and one',
    331: 'three hundred and thirty one',
    408: 'four hundred and eight',
    999: 'nine hundred and ninety nine'
  };

  t.plan(Object.keys(cases).length);

  Object.keys(cases).forEach((number) => {
    const expectedString = cases[number];
    t.is(numberWords.convert(number), expectedString, `numberWords.convert(${number}) should return "${expectedString}"`);
  });

  t.end();
});

test('999 - ...', t => {
  const cases = {
    1000: 'one thousand',
    2000: 'two thousand',
    2001: 'two thousand one',
    2101: 'two thousand one hundred and one',
    20101: 'twenty thousand one hundred and one',
    120031: 'one hundred and twenty thousand thirty one',
    1e+6: 'one million',
    1e+9: 'one billion',
    1e+12: 'one trillion',
    1e+15: 'one quadrillion',
    1e+18: 'Maximum safe integer in JavaScript exceeded',
    1e+21: 'Maximum safe integer in JavaScript exceeded',
    1e+24: 'Maximum safe integer in JavaScript exceeded'
  };

  t.plan(Object.keys(cases).length);

  Object.keys(cases).forEach((number) => {
    const expectedString = cases[number];
    t.is(numberWords.convert(number), expectedString, `numberWords.convert(${number}) should return "${expectedString}"`);
  });

  t.end();
});

test('decimals', t => {
  const cases = {
    42.41: 'forty two',
    132.79: 'one hundred and thirty two'
  };

  t.plan(Object.keys(cases).length);

  Object.keys(cases).forEach((number) => {
    const expectedString = cases[number];
    t.is(numberWords.convert(number), expectedString, `numberWords.convert(${number}) should return "${expectedString}"`);
  });

  t.end();
});
