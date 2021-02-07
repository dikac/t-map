import BaseSortKey from "../sort-key";
export default function SortKey(map, filter) {
    const sorted = BaseSortKey(map, filter);
    map.clear();
    for (const [key, value] of sorted.entries()) {
        map.set(key, value);
    }
}
//# sourceMappingURL=sort-key.js.map