import type { Product } from "../types/index";

const BASE_URL = "https://dev.wenivops.co.kr/services/fastapi-crud/1/product";

export async function fetchAllProducts(): Promise<Product[]> {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
        throw new Error("네트워크 에러");
    }
    const data: Product[] = await response.json();
    return data;
}
