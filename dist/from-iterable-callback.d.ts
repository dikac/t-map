export default function FromIterableCallback<Value, Key>(iterable: Iterable<Value>, callback: (value: Value) => Key, map?: Map<Key, Value>): Map<Key, Value>;
