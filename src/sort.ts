export default function Sort<Key, Value>(
    map : Map<Key, Value>,
    filter : (pair1:[key:Key, value:Value], pair2:[key:Key, value:Value])=>number
) : Map<Key, Value> {

    const arrays : [Key, Value][] = Array.from(map);

    const sorted = arrays.sort(filter);

    return new Map<Key, Value>(sorted)
}
