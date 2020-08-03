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
    function Sort(map, filter) {
        let arrays = Array.from(map);
        arrays.sort(function (value1, value2) {
            return filter(value1[1], value2[1]);
        });
        map.clear();
        for (let [key, value] of arrays) {
            map.set(key, value);
        }
    }
    exports.default = Sort;
});
//# sourceMappingURL=sort-value.js.map