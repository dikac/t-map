import Guard from "@dikac/t-function/boolean/guard";

export default function MapOf<Key, Value>(
    map : Map<Key, Value>,
    key : Guard<unknown, Key>,
    value : Guard<unknown, Value>,
) : map is Map<Key, Value> {

    for (let [k, v] of map) {

        if(!key(k)) {

            return false;
        }

        if(!value(v)) {

            return false;
        }
    }

    return true;

}
