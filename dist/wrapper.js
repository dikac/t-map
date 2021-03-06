export default class Wrapper {
    constructor(map) {
        this.map = map;
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
//# sourceMappingURL=wrapper.js.map