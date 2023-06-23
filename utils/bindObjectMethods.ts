// created to bind context to all methods of given object
export default <T>(obj: { [k: string]: any }): T => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(obj)).forEach((method) => {
        if (typeof obj[method] === 'function') obj[method] = obj[method].bind(obj);
    })

    return obj as T;
}