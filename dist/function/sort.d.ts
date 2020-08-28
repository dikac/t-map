export default function Sort<Key, Value>(map: Map<Key, Value>, filter: (pair1: [Key, Value], pair2: [Key, Value]) => number): void;
