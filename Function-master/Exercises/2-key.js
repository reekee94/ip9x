'use strict';

const generateKey = (length, possible) => {
  let key = ''
  for (let i = 0; i <= length; i++) {
    const randomChar = Math.floor(Math.random() * possible.length)
    key += possible[randomChar]
  }
  return key
};

module.exports = { generateKey };
