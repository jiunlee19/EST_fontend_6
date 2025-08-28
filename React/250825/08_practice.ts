function getFirstElement<T>(arr: T[]): T | undefined {
    if (arr.length === 0) {
        return undefined;
    }
    return arr[0];
}

//
interface Storage<K, V> {
    setItem(key: K, value: V): void;
    getItem(key: K): V | undefined;
}

class LocalStorage<K, V> implements Storage<K, V> {
    private storage = new Map<K, V>();

    public setItem(key: K, value: V): void {
        this.storage.set(key, value);
    }

    public getItem(key: K): V | undefined {
        return this.storage.get(key);
    }
}
