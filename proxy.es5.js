"use strict";

var target = {};
var handler = {
  get: function get(receiver, name) {
    return "Hello, " + name + "!";
  }
};

var p = new Proxy(target, handler);

console.log(p.world);
console.log(p.bro);

