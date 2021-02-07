import BaseSortKey from "../sort-key";

export default function SortKey<Key, Value>(
    map : Map<Key, Value>,
    filter : (key1:Key, key2:Key)=>number
) : void {

    const sorted = BaseSortKey(map, filter);

    map.clear();

    for(const [key, value] of sorted.entries()) {

        map.set(key, value);
    }
}
