(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-iterable/boolean/iterable", "@dikac/t-object/boolean/object", "@dikac/t-object/property/boolean/exists", "@dikac/t-object/boolean/method", "@dikac/t-array/boolean/list"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const iterable_1 = require("@dikac/t-iterable/boolean/iterable");
    const object_1 = require("@dikac/t-object/boolean/object");
    const exists_1 = require("@dikac/t-object/property/boolean/exists");
    const method_1 = require("@dikac/t-object/boolean/method");
    const list_1 = require("@dikac/t-array/boolean/list");
    function Compatible(value) {
        if (!object_1.default(value)) {
            return false;
        }
        if (!exists_1.default(value, 'size')) {
            return false;
        }
        if (!list_1.default(['clear', 'delete', 'forEach', 'get', 'has', 'set'], (property) => method_1.default(value, property))) {
            return false;
        }
        if (!iterable_1.default(value)) {
            return false;
        }
        return true;
    }
    exports.default = Compatible;
});
//# sourceMappingURL=compatible.js.map