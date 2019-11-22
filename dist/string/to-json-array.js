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
    function ToJsonArray(map) {
        let array = [];
        for (let [key, value] of map) {
            array.push([key, value]);
        }
        return JSON.stringify(array);
    }
    exports.default = ToJsonArray;
});
//# sourceMappingURL=to-json-array.js.map