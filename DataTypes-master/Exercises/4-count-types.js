'use strict';

const countTypesInArray = arr => {
  const types = {}
  for (const item of arr) {
    const typeOfItem = typeof item
    const count = types[typeOfItem] || 0
    types[typeOfItem] = count + 1
  }
  return types
};

module.exports = { countTypesInArray };
