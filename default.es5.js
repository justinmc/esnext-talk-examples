'use strict';

function foo() {
  var obj = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return obj;
}

var myObj = foo();

myObj.ok = 'alright';

console.log(myObj);
console.log(foo());

