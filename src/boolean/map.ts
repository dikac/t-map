

export default function Map_(value : unknown) : value is Map<any, any> {

    return value instanceof Map;
}
