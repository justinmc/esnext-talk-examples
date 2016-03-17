function foo(obj = {}) {
  return obj;
}

let myObj = foo();

myObj.ok = 'alright';

console.log(myObj);
console.log(foo());
