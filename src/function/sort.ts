import BaseSort from "../sort";
import Replace from "../replace";

export default function Sort<Key, Value>(
    map : Map<Key, Value>,
    filter : (pair1:[key:Key, value:Value], pair2:[key:Key, value:Value])=>number
) : void {

    Replace(map, BaseSort(map, filter));
}
