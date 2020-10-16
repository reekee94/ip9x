'use strict';

const fn = () => {
  console.log({ a });
  var a = 'Hoisting';
};

module.exports = { fn };
