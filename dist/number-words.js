(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.numberWords = f()}})(function(){var define,module,exports;return (function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var magnitudes = ['thousand', 'million', 'billion', 'trillion', 'quadrillion'];

var addMagnitudes = function addMagnitudes(str, index) {
  return str && index ? str + ' ' + magnitudes[index - 1] : str;
};

exports.default = addMagnitudes;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getReverseNumberParts = function getReverseNumberParts(number) {
  var parts = [];
  var int = Math.trunc(number);

  while (int > 0) {
    parts.push(int % 1000);
    int = Math.floor(int / 1000);
  }
  return parts;
};

exports.default = getReverseNumberParts;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convert = undefined;

var _getReverseNumberParts = require('./getReverseNumberParts');

var _getReverseNumberParts2 = _interopRequireDefault(_getReverseNumberParts);

var _toWords = require('./toWords');

var _toWords2 = _interopRequireDefault(_toWords);

var _addMagnitudes = require('./addMagnitudes');

var _addMagnitudes2 = _interopRequireDefault(_addMagnitudes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var convert = function convert(number) {
  if (number > Math.pow(2, 53) - 1) {
    return 'Maximum safe integer in JavaScript exceeded';
  }
  return (0, _getReverseNumberParts2.default)(number).map(_toWords2.default).map(_addMagnitudes2.default).reverse().join(' ').trim();
};

exports.convert = convert;

},{"./addMagnitudes":1,"./getReverseNumberParts":2,"./toWords":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var words = {
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
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety'
};

var toWords = function toWords(number) {
  var result = [];
  if (number < 20) {
    if (number) {
      result.push(words[number]);
    }
  } else if (number < 100) {
    result.push(words[Math.floor(number / 10) * 10]);
    if (number % 10) {
      result.push(words[number % 10]);
    }
  } else {
    result.push(words[Math.floor(number / 100)]);
    result.push('hundred');
    if (number % 100) {
      result.push('and ' + toWords(number % 100));
    }
  }
  return result.join(' ');
};

exports.default = toWords;

},{}]},{},[3])(3)
});