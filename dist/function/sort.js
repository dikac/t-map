import BaseSort from "../sort";
import Replace from "../replace";
export default function Sort(map, filter) {
    Replace(map, BaseSort(map, filter));
}
//# sourceMappingURL=sort.js.map