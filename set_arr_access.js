const config = {
  iterations: 100000
};

// Populate 
const arr = new Array();
const set = new Set();

for (let i = 0; i < config.iterations; i++) {
  arr.push(i);
  set.add(i);
}

// Test arr access
const test = Math.floor(Math.random() * config.iterations);
const startArr = new Date().getTime();

console.log(`Arr start: ${test}`);

const answerArr = arr.includes(test);

const timeArr = new Date().getTime() - startArr;

console.log(`Arr finish ${answerArr}: ${timeArr}`);

// Test set access
const startSet = new Date().getTime();

console.log(`Set start: ${test}`);

const answerSet = set.has(test);

const timeSet = new Date().getTime() - startSet;

console.log(`Set finish ${answerSet}: ${timeSet}`);
