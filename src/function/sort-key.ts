
export default function <Key, Value>(
    map : Map<Key, Value>,
    filter : (key1:Key, key2:Key)=>number
) : void {

    let arrays : [Key, Value][] = Array.from(map);

    arrays.sort(function(value1, value2) {

        return filter(value1[0], value2[0]);
    });

    map.clear();

    for (let [key, value] of arrays) {

        map.set(key, value);
    }

}

