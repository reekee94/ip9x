'use strict';

const p1 = {
  x: 10,
  y: 20,

  move(x, y) {
    this.x += x;
    this.y += y;
  },

  toString() {
    return `[${this.x}, ${this.y}]`;
  },
};

p1.move(-5, 10);

console.log(p1);
console.log(p1.toString());
console.log(p1 + '');

const skills = () => {}

skills ({
  hard: [
    JavaScript,
    [HTML, CSS],
    [React, p1, Redux],
    NodeJS,
    [Mongo, SQL],
    p1
  ],
    other: [
    [Jira, Confluence],
    git,
    bash,
    OOP,
      p1
  ]
}
)
