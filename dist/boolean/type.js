(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "t-object/boolean/methods", "t-object/boolean/symbol-iterator", "t-object/boolean/symbol-to-string"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const methods_1 = require("t-object/boolean/methods");
    const symbol_iterator_1 = require("t-object/boolean/symbol-iterator");
    const symbol_to_string_1 = require("t-object/boolean/symbol-to-string");
    function Type(value) {
        if (typeof value !== 'object' || value === null) {
            return false;
        }
        if (!('size' in value)) {
            return false;
        }
        if (!methods_1.default(value, 'clear', 'delete', 'forEach', 'get', 'has', 'set')) {
            return false;
        }
        if (!symbol_iterator_1.default(value)) {
            return false;
        }
        if (!symbol_to_string_1.default(value)) {
            return false;
        }
        return true;
    }
    exports.default = Type;
});
//# sourceMappingURL=type.js.map