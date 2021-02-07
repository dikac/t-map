import BaseSort from "../sort";

export default function Sort<Key, Value>(
    map : Map<Key, Value>,
    filter : (pair1:[key:Key, value:Value], pair2:[key:Key, value:Value])=>number
) : void {

    const sorted = BaseSort(map, filter);

    map.clear();

    for(const [key, value] of sorted.entries()) {

        map.set(key, value);
    }

}
