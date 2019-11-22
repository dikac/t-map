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
    function ToString(map, dataDelimiter, associativeDelimiter) {
        let buffer = [];
        for (let [key, value] of map) {
            buffer.push(key + associativeDelimiter + value);
        }
        return buffer.join(dataDelimiter);
    }
    exports.default = ToString;
});
//# sourceMappingURL=to-string.js.map