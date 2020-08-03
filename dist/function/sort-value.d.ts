import Function from "@dikac/t-function/function";
export default function Sort<Key, Value>(map: Map<Key, Value>, filter: Function<[Value, Value], number>): void;
