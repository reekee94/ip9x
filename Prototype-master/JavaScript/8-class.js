'use strict';

class Logger {
  constructor(kind) {
    this.color = Logger.colors[kind] || Logger.colors.info;
  }

  log(s) {
    const date = new Date().toISOString();
    console.log(this.color + date + '\t' + s);
  }
}

Logger.colors = {
  warning: '\x1b[1;33m',
  error: '\x1b[0;31m',
  info: '\x1b[1;37m',
};

// Usage

const warning = new Logger('warning');
const error = new Logger('error');
const debug = new Logger('debug');
const slow = new Logger('slow');

slow.log('I am slow logger');
warning.log('Hello');
error.log('World');
debug.log('Bye!');


class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    log(this.name + ' издает звук.');
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' лает.');
    this.skills = {
      hard: [
        JavaScript,
        [HTML, CSS],
        [React, Redux],
        NodeJS,
        [Mongo, SQL]
      ],
      other: [
        [Jira, Confluence],
        git,
        bash,
        OOP
      ]
    }
  }
  experience = {
    softServe_IT_academy: '2 month',
    softServe_project: '6 month'
  }
  languages[Ukraine] = 'zaebis'
}

var d = new Dog('Митци');
d.speak();

 let languages = [{
  english: 'Upper Intermediate'
}, ]
