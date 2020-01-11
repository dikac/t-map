import Methods from "@dikac/t-object/boolean/methods";
import SymbolIterator from "@dikac/t-object/boolean/symbol-iterator";
import SymbolToString from "@dikac/t-object/boolean/symbol-to-string";

export default function Type <Key, Value> (value : any) : value is Map<Key, Value> {

    if(typeof value !== 'object' || value === null) {

        return false;
    }

    if(!('size' in value)) {

        return false;
    }

    if(!Methods(value, 'clear', 'delete', 'forEach', 'get', 'has', 'set')) {

        return false;
    }

    if(!SymbolIterator(value)) {

        return false;
    }

    if(!SymbolToString(value)) {

        return false;
    }

    return true;
}


