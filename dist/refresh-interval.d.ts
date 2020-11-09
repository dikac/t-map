export default class RefreshInterval<Key, Value> extends Map<Key, Value> {
    #private;
    callback: (set: RefreshInterval<Key, Value>) => void;
    private interval?;
    constructor(milliseconds: number, callback: (set: RefreshInterval<Key, Value>) => void, values?: readonly [Key, Value][]);
    stop(): void;
    start(): void;
    get seconds(): number;
    set seconds(second: number);
    get milliseconds(): number;
    set milliseconds(milliseconds: number);
}
