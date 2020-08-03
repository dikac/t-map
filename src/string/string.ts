export default function String (
    map : Map<string, string>,
    dataDelimiter : string,
    associativeDelimiter : string,
) : string {

    let buffer : string[] = [];

    for(let [key, value] of map) {

        buffer.push(key + associativeDelimiter + value);
    }

    return buffer.join(dataDelimiter);
}


