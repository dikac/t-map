export default function Mapper<Key, Value, MappedKey, MappedValue>(source: Map<Key, Value>, map: (key: Key, value: Value) => [MappedKey, MappedValue]): Map<MappedKey, MappedValue>;
