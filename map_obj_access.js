var hash = require('./tool_hash');

const config = {
  iterations: 1000
};

const map = new Map();
const obj = new Object();

for (let i = 0; i < config.iterations; i++) {
  const key = hash(i);
  obj[key] = i;
  map.set(key, i);
}

// Test Obj
const startObj = new Date().getTime();
const test = hash(Math.floor(Math.random() * config.iterations));

console.log(`Obj start: ${test}`);

const answerObj = obj[test];

const timeObj = new Date().getTime() - startObj;

console.log(`Obj finish ${answerObj}: ${timeObj}`);

// Test Map
const startMap = new Date().getTime();

console.log(`Map start: ${test}`);

const answerMap = map.get(test);

const timeMap = new Date().getTime() - startMap;

console.log(`Map finish ${config.iterations}: ${timeMap}`);
