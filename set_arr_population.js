const config = {
  iterations: 100000
};

// Test array
const startArr = new Date().getTime();

console.log(`Arr start`);

const arr = new Array();

for (let i = 0; i < config.iterations; i++) {
  arr.push(i);
}

const timeArr = new Date().getTime() - startArr;

console.log(`Arr finish populating ${config.iterations}: ${timeArr}`);

// Test set
const startSet = new Date().getTime();

console.log(`Set start`);

const set = new Set();

for (let i = 0; i < config.iterations; i++) {
  set.add(i);
}

const timeSet = new Date().getTime() - startSet;

console.log(`Set finish populating ${config.iterations}: ${timeSet}`);
