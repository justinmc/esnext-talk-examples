'use strict';

function factorial(_x2) {
    var _arguments = arguments;
    var _again = true;

    _function: while (_again) {
        var n = _x2;
        acc = undefined;

        'use strict';
        _again = false;
        var acc = _arguments.length <= 1 || _arguments[1] === undefined ? 1 : _arguments[1];
        if (n <= 1) return acc;
        _arguments = [_x2 = n - 1, n * acc];
        _again = true;
        continue _function;
    }
}

// Stack overflow in most implementations today,
// but safe on arbitrary inputs in ES6
console.log(factorial(100000000));

