'use strict';

const seq = f => g => x => (typeof g === 'number' ? f(g) : seq(f(g(x))));

module.exports = { seq };
