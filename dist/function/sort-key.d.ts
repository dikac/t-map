import Function from "@dikac/t-function/function";
export default function <Key, Value>(map: Map<Key, Value>, filter: Function<[Key, Key], number>): void;
