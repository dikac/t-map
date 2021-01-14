/**
 * map a {@see Map} object
 *
 * Mapper name taken to avoid conflict with {@see Map}
 *
 * @param source
 * @param map
 */
export default function Mapper(source, map) {
    const result = new Map();
    source.forEach((value, key) => result.set(...map(key, value)));
    return result;
}
//# sourceMappingURL=mapper.js.map