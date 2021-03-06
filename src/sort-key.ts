
export default function SortKey<Key, Value>(
    map : Map<Key, Value>,
    filter : (key1:Key, key2:Key)=>number
) : Map<Key, Value> {

    const arrays : [Key, Value][] = Array.from(map);

    const sorted = arrays.sort(function(value1, value2) {

        return filter(value1[0], value2[0]);
    });

    return new Map<Key, Value>(sorted);
}

