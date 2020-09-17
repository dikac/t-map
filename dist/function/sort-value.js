export default function Sort(map, filter) {
    let arrays = Array.from(map);
    arrays.sort(function (value1, value2) {
        return filter(value1[1], value2[1]);
    });
    map.clear();
    for (let [key, value] of arrays) {
        map.set(key, value);
    }
}
//# sourceMappingURL=sort-value.js.map