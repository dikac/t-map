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
    class Wrapper {
        constructor(map) {
            this.map = map;
        }
        getMap() {
            return this._map;
        }
        setMap(map) {
            this._map = map;
        }
        get map() {
            return this.getMap();
        }
        set map(map) {
            this.setMap(map);
        }
        get [Symbol.toStringTag]() {
            return this.map[Symbol.toStringTag];
        }
        get size() {
            return this.map.size;
        }
        has(key) {
            return this.map.has(key);
        }
        [Symbol.iterator]() {
            return this.map[Symbol.iterator]();
        }
        clear() {
            this.map.clear();
        }
        delete(key) {
            return this.map.delete(key);
        }
        entries() {
            return this.map.entries();
        }
        forEach(callbackfn, thisArg) {
            return this.map.forEach(callbackfn, thisArg);
        }
        get(key) {
            return this.map.get(key);
        }
        keys() {
            return this.map.keys();
        }
        set(key, value) {
            this.map.set(key, value);
            return this;
        }
        values() {
            return this.map.values();
        }
    }
    exports.default = Wrapper;
});
//# sourceMappingURL=wrapper.js.map