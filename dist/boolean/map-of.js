export default function MapOf(map, key, value) {
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
//# sourceMappingURL=map-of.js.map