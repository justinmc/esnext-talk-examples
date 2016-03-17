var hash = require('./tool_hash');

const config = {
  iterations: 1000
};

// Test Obj
const startObj = new Date().getTime();

console.log(`Obj start`);

const obj = new Object();

for (let i = 0; i < config.iterations; i++) {
  const key = hash(i);
  obj[key] = i;
}

const timeObj = new Date().getTime() - startObj;

console.log(`Obj finish ${config.iterations}: ${timeObj}`);

// Test Map
const startMap = new Date().getTime();

console.log(`Map start`);

const map = new Map();

for (let i = 0; i < config.iterations; i++) {
  const key = hash(i);
  map.set(key, i);
}

const timeMap = new Date().getTime() - startMap;

console.log(`Map finish ${config.iterations}: ${timeMap}`);
