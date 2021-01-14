import Replace from "../replace";
import BaseSortKey from "../sort-key";

export default function SortKey<Key, Value>(
    map : Map<Key, Value>,
    filter : (key1:Key, key2:Key)=>number
) : void {

    Replace(map, BaseSortKey(map, filter));
}
