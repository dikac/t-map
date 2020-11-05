import Timeout = NodeJS.Timeout;

export default class RefreshInterval<Key, Value> extends Map<Key, Value> {

    private interval !: Timeout;
    #milliseconds !: number;

    constructor(
        milliseconds : number,
        public callback : (set : RefreshInterval<Key, Value>) => void,
        values?: readonly [Key, Value][]
    ) {
        super(values);
        this.milliseconds = milliseconds;
    }

    get seconds() : number {

        return this.milliseconds / 1000;
    }

    set seconds(second : number) {

        this.milliseconds = second * 1000;
    }

    get milliseconds() : number {

        return this.#milliseconds;
    }

    set milliseconds(milliseconds : number) {

        if(this.interval) {

            clearInterval(this.interval);
        }

        this.#milliseconds = milliseconds;
        this.interval = setInterval(()=>this.callback(this), milliseconds)
    }

}
