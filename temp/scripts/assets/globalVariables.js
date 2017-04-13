"use strict";
cc._RFpush(module, '5ca96qRk8VMjYN8l0Wvfe1V', 'globalVariables');
// globalVariables.js

"use strict";

var input = {
    nilai: 0,
    nilai2: 0,
    operator: "",
    load: function load() {
        return input.nilai;
    },
    load2: function load2() {
        return input.nilai2;
    },
    bcoperator: function bcoperator() {
        return input.operator;
    }

};
input.load();
input.load2();
input.bcoperator();
module.exports = input;

cc._RFpop();