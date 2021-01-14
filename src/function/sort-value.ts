import Replace from "../replace";
import BaseSortValue from "../sort-value";

export default function SortValue<Key, Value>(
    map : Map<Key, Value>,
    filter : (value1:Value, value2:Value)=>number
) : void {

    Replace(map, BaseSortValue(map, filter));

}
