(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function FromIterableCallback(iterable, callback, map = new Map()) {
        for (let value of iterable) {
            map.set(callback(value), value);
        }
        return map;
    }
    exports.default = FromIterableCallback;
});
//# sourceMappingURL=from-iterable-callback.js.map