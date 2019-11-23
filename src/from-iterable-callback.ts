export default function FromIterableCallback<Value, Key>(
    iterable : Iterable<Value>,
    callback : (value : Value) => Key,
    map : Map<Key, Value> = new Map<Key, Value>()
) : Map<Key, Value> {

    for(let value of iterable) {

        map.set(callback(value), value);
    }

    return map;
}