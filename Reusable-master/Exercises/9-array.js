'use strict';

const phonebook = [
  { name: 'Oleh', phone: '12345678' },
  { name: 'Hitler', phone: '14881488' },
  { name: 'Fibbo', phone: '11235813' }
];

const findPhoneByName = name => {
  for (const e in phonebook) {
    if (e.name === name) return e.phone
  }
}

module.exports = { phonebook, findPhoneByName };
