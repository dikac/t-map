export default function Sort<Key, Value>(
    map : Map<Key, Value>,
    filter : (value1:Value, value2:Value)=>number
) : void {

    let arrays : [Key, Value][] = Array.from(map);

    arrays.sort(function(value1, value2) {

        return filter(value1[1], value2[1]);
    });

    map.clear();

    for (let [key, value] of arrays) {

        map.set(key, value);
    }

}
