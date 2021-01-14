export default function Sort(map, filter) {
    const arrays = Array.from(map);
    const sorted = arrays.sort(filter);
    return new Map(sorted);
}
//# sourceMappingURL=sort.js.map