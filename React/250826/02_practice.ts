// 2.1
interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
}
// 2.1.1
type omitProduct = Omit<Product, "id">;
console.log(omitProduct);

// 2.1.2
type partialProduct = Partial<Product>;
console.log(partialProduct);

// 2.1.3
type pickProduct = Pick<Product, "id", "name", "price">;
console.log(pickProduct);

// 2.2
interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
    category?: string;
}
// 2.2.1
type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
};
type ReadonlyProduct = MyReadonly<Product>;

// 2.2.2
type MyRequired<T> = {
    [P in keyof T]-?: T[P];
};
type RequiredProduct = MyRequired<Product>;
