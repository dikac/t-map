/**
 * map a {@see Map} object
 *
 * Mapper name taken to avoid conflict with {@see Map}
 *
 * @param source
 * @param map
 */
export default function Mapper<
    Key,
    Value,
    MappedKey,
    MappedValue,
>(
    source: Map<Key, Value>,
    map:(key: Key, value: Value)=>[MappedKey, MappedValue]
) : Map<MappedKey, MappedValue> {

    const result = new Map<MappedKey, MappedValue>();

    source.forEach((value, key) => result.set(...map(key, value)));

    return result;
}
