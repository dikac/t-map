export default function FromIterableCallback<Key, Value>(iterable: Iterable<Value>, callback: (value: Value) => Key, map?: Map<Key, Value>): Map<Key, Value>;
