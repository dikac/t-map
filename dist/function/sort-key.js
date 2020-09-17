export default function (map, filter) {
    let arrays = Array.from(map);
    arrays.sort(function (value1, value2) {
        return filter(value1[0], value2[0]);
    });
    map.clear();
    for (let [key, value] of arrays) {
        map.set(key, value);
    }
}
//# sourceMappingURL=sort-key.js.map