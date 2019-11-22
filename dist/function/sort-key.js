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
        let keys = Array.from(map.keys());
        keys.sort(filter);
        let buffer = new Map();
        for (let key of keys) {
            let value = map.get(key);
            if (value) {
                buffer.set(key, value);
            }
        }
        map.clear();
        for (let [key, value] of buffer) {
            map.set(key, value);
        }
    }
    exports.default = default_1;
});
//# sourceMappingURL=sort-key.js.map