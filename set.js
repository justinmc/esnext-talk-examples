var hash = require('./tool_hash');

const config = {
  iterations: 10000
};

const set = new Set();
const obj = new Object();

for (let i = 0; i < config.iterations; i++) {
  const value = hash(i);
  set.add(value);
  obj[value] = i;
}

/*
const arr = new Array();

for (let i = 0; i < config.iterations; i++) {
  const value = hash(i);
  arr.push(value);
}
*/

const test = hash(Math.round(Math.random() * config.iterations));
const startSet = new Date().getTime();

console.log(`Set start: ${test}`);

const answerSet = set.has(test);

const timeSet = new Date().getTime() - startSet;

console.log(`Set finish ${answerSet}: ${timeSet}`);


const startObj = new Date().getTime();

console.log(`Obj start: ${test}`);

const answerObj = obj.hasOwnProperty(test);

const timeObj = new Date().getTime() - startObj;

console.log(`Obj finish ${answerObj}: ${timeObj}`);
