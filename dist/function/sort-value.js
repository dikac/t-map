import BaseSortValue from "../sort-value";
export default function SortValue(map, filter) {
    const sorted = BaseSortValue(map, filter);
    map.clear();
    for (const [key, value] of sorted.entries()) {
        map.set(key, value);
    }
}
//# sourceMappingURL=sort-value.js.map