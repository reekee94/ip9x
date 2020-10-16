'use strict';

const fn = () => {
  const constant = { name: 'Oleg' }
  let variable = { name: 'Oleh' }
  constant['name'] = 'Constantin'
  variable.name = 'Valera'

  variable = { name: 'It will create and reassign new Object' }
};

module.exports = { fn };
