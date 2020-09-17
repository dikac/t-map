export default function Sort(map, filter) {
    let arrays = Array.from(map);
    arrays.sort(filter);
    map.clear();
    for (let [key, value] of arrays) {
        map.set(key, value);
    }
}
//# sourceMappingURL=sort.js.map