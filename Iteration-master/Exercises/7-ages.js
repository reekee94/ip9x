'use strict';

const ages = persons => {
  const data = {};
  for (const person in persons) {
    const name = persons[person];
    data[person] = name.died - name.born;
  }
  return data;
};

module.exports = { ages };
