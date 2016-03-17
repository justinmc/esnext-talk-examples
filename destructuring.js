function getArray() {
  return [1,2,3];
}

let [a, b, c] = getArray();

console.log(a, b, c);

function getObj() {
  return {one: 1, two: 2, three: 3};
}

let {one: x, two: y, three: z} = getObj();


console.log(x, y, z);
