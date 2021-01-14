export default function Replace<Key, Value>(
    destination: Map<Key, Value>,
    source : Map<Key, Value>
) : Map<Key, Value> {

    destination.clear();
    source.forEach((value, key) => destination.set(key, value));

    return destination;
}
