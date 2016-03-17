"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

function getArray() {
  return [1, 2, 3];
}

var _getArray = getArray();

var _getArray2 = _slicedToArray(_getArray, 3);

var a = _getArray2[0];
var b = _getArray2[1];
var c = _getArray2[2];

console.log(a, b, c);

function getObj() {
  return { one: 1, two: 2, three: 3 };
}

var _getObj = getObj();

var x = _getObj.one;
var y = _getObj.two;
var z = _getObj.three;

console.log(x, y, z);

