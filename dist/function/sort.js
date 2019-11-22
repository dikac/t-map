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
    function default_1(map, filter) {
        let arrays = Array.from(map);
        arrays.sort(filter);
        map.clear();
        for (let [key, value] of arrays) {
            map.set(key, value);
        }
    }
    exports.default = default_1;
});
//# sourceMappingURL=sort.js.map