var _primitives = require('./_primitives');
var _isModule = require('./_isModule');
var _isSubModule = require('./_isSubModule');

function moduleFor(value) {
    if (value == null) {
        throw new TypeError('Can not get module for null or undefined');
    }

    var C = value.constructor;

    if (_isModule(C)) {
        if (_isSubModule(C)) {
            return C['@@functional/parentModule'];
        }
        return C;
    }

    switch(C){
        case Number:
            return _primitives.Num;
        case Boolean:
            return _primitives.Bool;
        case String:
            return _primitives.Str;
        case Array:
            return _primitives.Arr;
        case Function:
            return _primitives.Fun;
        default:
            return _primitives.Obj;
    }
}

module.exports = moduleFor;