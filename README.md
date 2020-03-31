# number-words

[![CI Status](https://github.com/andreruffert/number-words/workflows/CI/badge.svg)](https://github.com/andreruffert/number-words/actions?query=workflow%3ACI) 
[![npm version](https://img.shields.io/npm/v/number-words.svg)](https://www.npmjs.com/package/number-words)

> Convert a number into words

## Install

```
$ npm install --save number-words
```

## Usage

```js
const numberWords = require('number-words');

numberWords.convert(42);
//=> 'fourty two'

numberWords.convert(101);
//=> 'one hundred and one'

numberWords.convert(31.41);
//=> 'thirty one'
```

## API

### numberWords.convert(number)

#### number

Type `number`

Number to convert into words.

## License

MIT © [André Ruffert](http://andreruffert.com)
