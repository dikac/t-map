export default function FromIterableCallback(iterable, callback, map = new Map()) {
    for (let value of iterable) {
        map.set(callback(value), value);
    }
    return map;
}
//# sourceMappingURL=from-iterable-callback.js.map