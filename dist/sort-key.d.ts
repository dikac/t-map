export default function SortKey<Key, Value>(map: Map<Key, Value>, filter: (key1: Key, key2: Key) => number): Map<Key, Value>;
