'use strict';

const sum = (...args) => {
  const a = args.reduce((prev, current) => prev + current, 0);
  return a;
};

module.exports = { sum };
