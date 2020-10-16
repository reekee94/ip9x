'use strict';

const random = (min, max) => {
  const floor = Math.floor;
  return floor(Math.random * floor(max - min + 1)) + min;
};

module.exports = { random };
