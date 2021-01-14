export default function Mapper(source, map) {
    const result = new Map();
    source.forEach((value, key) => result.set(...map(key, value)));
    return result;
}
//# sourceMappingURL=mapper.js.map