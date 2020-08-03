import Iterable from "@dikac/t-iterable/boolean/iterable";
import Object_ from "@dikac/t-object/boolean/object";
import Property from "@dikac/t-object/boolean/property";
import Method from "@dikac/t-object/boolean/method";
import List from "@dikac/t-array/boolean/list";

export default function Compatible(value : any) : value is Map<any, any> {

    if(!Object_(value)) {

        return false;
    }

    if(!Property(value, 'size')) {

        return false;
    }

    if(!List(['clear', 'delete', 'forEach', 'get', 'has', 'set'], (property) => Method(value, property))) {

        return false;
    }

    if(!Iterable(value)) {

        return false;
    }

    return true;
}


