export default function Replace(destination, source) {
    destination.clear();
    source.forEach((value, key) => destination.set(key, value));
    return destination;
}
//# sourceMappingURL=replace.js.map