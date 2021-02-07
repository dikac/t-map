export default class RefreshInterval<Key, Value, Return = any> extends Map<Key, Value> {
    #private;
    callback: (set: RefreshInterval<Key, Value>) => Return;
    private timeout?;
    constructor(milliseconds: number, callback: (set: RefreshInterval<Key, Value>) => Return, values?: readonly [Key, Value][]);
    restart(): void;
    stop(): void;
    protected call(): Return;
    protected next(): void;
    start(): void;
    get seconds(): number;
    set seconds(second: number);
    get milliseconds(): number;
    set milliseconds(milliseconds: number);
}
