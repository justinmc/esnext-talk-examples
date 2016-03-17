var hash = require('./tool_hash');

const config = {
  iterations: 10000
};

// Test Obj
const startObj = new Date().getTime();

console.log(`Obj start`);

const obj = new Object();

for (let i = 0; i < config.iterations; i++) {
  obj[i] = true;
}

const timeObj = new Date().getTime() - startObj;

console.log(`Obj finish ${config.iterations}: ${timeObj}`);

// Test Map
const startMap = new Date().getTime();

console.log(`Map start`);

const map = new Map();

for (let i = 0; i < config.iterations; i++) {
  map.set(i, true);
}

const timeMap = new Date().getTime() - startMap;

console.log(`Map finish ${config.iterations}: ${timeMap}`);
