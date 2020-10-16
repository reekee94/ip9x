'use strict';

const range = (a, b) => {
  const arrOfNumbers = []
  for (let i = a; i <= b; i++) {
    arrOfNumbers.push(i)
  }
  return arrOfNumbers
};

range(15, 30)

module.exports = { range };
