/*
if (true) {
  console.log(bar); // undefined error
  let bar = 1;
}
console.log(bar); // undefined error
*/

console.log(bar);
if (true) {
  console.log(bar);
  var bar = 1;
}
console.log(bar);
