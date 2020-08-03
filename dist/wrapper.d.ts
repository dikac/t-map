import InferKey from "./key/infer";
import InferValue from "./value/infer";
export default class Wrapper<MapT extends Map<unknown, unknown>> implements Map<InferKey<MapT>, InferValue<MapT>> {
    map: MapT;
    constructor(map: MapT);
    get [Symbol.toStringTag](): string;
    get size(): number;
    has(key: InferKey<MapT>): boolean;
    [Symbol.iterator](): IterableIterator<[InferKey<MapT>, InferValue<MapT>]>;
    clear(): void;
    delete(key: InferKey<MapT>): boolean;
    entries(): IterableIterator<[InferKey<MapT>, InferValue<MapT>]>;
    forEach(callbackfn: (value: InferValue<MapT>, key: InferKey<MapT>, map: Map<InferKey<MapT>, InferValue<MapT>>) => void, thisArg?: any): void;
    get(key: InferKey<MapT>): InferValue<MapT> | undefined;
    keys(): IterableIterator<InferKey<MapT>>;
    set(key: InferKey<MapT>, value: InferValue<MapT>): this;
    values(): IterableIterator<InferValue<MapT>>;
}
