export default function SortValue<Key, Value>(
    map : Map<Key, Value>,
    filter : (value1:Value, value2:Value)=>number
) : Map<Key, Value> {

    const arrays : [Key, Value][] = Array.from(map);

    const sorted = arrays.sort(function(value1, value2) {

        return filter(value1[1], value2[1]);
    });

    return new Map<Key, Value>(sorted);
}
