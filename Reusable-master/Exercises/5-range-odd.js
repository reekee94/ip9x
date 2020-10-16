'use strict';

const rangeOdd = (a, b) => {
  const arrOfNumbers = []
  for (let i = a; i <= b; i++) {
    if (i % 2 !== 0)
      arrOfNumbers.push(i)
  }
  return arrOfNumbers
};

rangeOdd(15, 30)


module.exports = { rangeOdd };
