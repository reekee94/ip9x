'use strict';

const phonebook = {
  Oleh: 12345678,
  Hitler: 14881488,
  Fibbo: 11235813
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
