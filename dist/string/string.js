export default function String(map, dataDelimiter, associativeDelimiter) {
    let buffer = [];
    for (let [key, value] of map) {
        buffer.push(key + associativeDelimiter + value);
    }
    return buffer.join(dataDelimiter);
}
//# sourceMappingURL=string.js.map