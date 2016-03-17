var hash = require('./tool_hash');

const config = {
  iterations: 100000
};

// Test set
const startObj = new Date().getTime();

console.log(`Obj start`);

const obj = new Object();

for (let i = 0; i < config.iterations; i++) {
  const value = hash(i);
  obj[value] = i;
}

const timeObj = new Date().getTime() - startObj;

console.log(`Obj finish populating ${config.iterations}: ${timeObj}`);

// Test object
const startSet = new Date().getTime();

console.log(`Set start`);

const set = new Set();

for (let i = 0; i < config.iterations; i++) {
  const value = hash(i);
  set.add(value);
}

const timeSet = new Date().getTime() - startSet;

console.log(`Set finish populating ${config.iterations}: ${timeSet}`);
