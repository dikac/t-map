import BaseSort from "../sort";
export default function Sort(map, filter) {
    const sorted = BaseSort(map, filter);
    map.clear();
    for (const [key, value] of sorted.entries()) {
        map.set(key, value);
    }
}
//# sourceMappingURL=sort.js.map