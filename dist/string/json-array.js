export default function JsonArray(map) {
    let array = [];
    for (let [key, value] of map) {
        array.push([key, value]);
    }
    return JSON.stringify(array);
}
//# sourceMappingURL=json-array.js.map