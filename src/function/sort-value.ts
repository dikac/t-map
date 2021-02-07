import BaseSortValue from "../sort-value";

export default function SortValue<Key, Value>(
    map : Map<Key, Value>,
    filter : (value1:Value, value2:Value)=>number
) : void {

    const sorted = BaseSortValue(map, filter);

    map.clear();

    for(const [key, value] of sorted.entries()) {

        map.set(key, value);
    }
}
