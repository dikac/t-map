export default function SortValue(map, filter) {
    const arrays = Array.from(map);
    const sorted = arrays.sort(function (value1, value2) {
        return filter(value1[1], value2[1]);
    });
    return new Map(sorted);
}
//# sourceMappingURL=sort-value.js.map