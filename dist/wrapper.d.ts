export default class Wrapper<K, V, Container extends Map<K, V>> implements Map<K, V> {
    private _map;
    constructor(map: Container);
    protected getMap(): Container;
    protected setMap(map: Container): void;
    get map(): Container;
    set map(map: Container);
    get [Symbol.toStringTag](): string;
    get size(): number;
    has(key: K): boolean;
    [Symbol.iterator](): IterableIterator<[K, V]>;
    clear(): void;
    delete(key: K): boolean;
    entries(): IterableIterator<[K, V]>;
    forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
    get(key: K): V | undefined;
    keys(): IterableIterator<K>;
    set(key: K, value: V): this;
    values(): IterableIterator<V>;
}
