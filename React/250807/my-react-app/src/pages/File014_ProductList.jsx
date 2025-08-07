// components/ProductList.js
import { useContext } from "react";
import { MyContext } from "../context/MyContext";

function ProductList() {
    const { products, cart, addToCart, removeFromCart } = useContext(MyContext);
    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>금액: {product.price}원</p>
                    <button onClick={() => addToCart(product)}>
                        장바구니에 추가
                    </button>
                </div>
            ))}
            <h2>상품 목록</h2>
        </div>
    );
}
export default ProductList;
