const config = {
  iterations: 100000
};

// Test object
const startObj = new Date().getTime();

console.log(`Obj start`);

const obj = new Object();

for (let i = 0; i < config.iterations; i++) {
  obj[i] = true;
}

const timeObj = new Date().getTime() - startObj;

console.log(`Obj finish populating ${config.iterations}: ${timeObj}`);

// Test set
const startSet = new Date().getTime();

console.log(`Set start`);

const set = new Set();

for (let i = 0; i < config.iterations; i++) {
  set.add(i);
}

const timeSet = new Date().getTime() - startSet;

console.log(`Set finish populating ${config.iterations}: ${timeSet}`);
