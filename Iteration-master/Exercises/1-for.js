'use strict';

const sum = (...args) => {
  let accumulator = 0;
  for (const n in args) {
    accumulator += +n;
  }
  return accumulator;
};

module.exports = { sum };
