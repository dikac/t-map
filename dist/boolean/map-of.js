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
    function MapOf(map, key, value) {
        for (let [k, v] of map) {
            if (!key(k)) {
                return false;
            }
            if (!value(v)) {
                return false;
            }
        }
        return true;
    }
    exports.default = MapOf;
});
//# sourceMappingURL=map-of.js.map