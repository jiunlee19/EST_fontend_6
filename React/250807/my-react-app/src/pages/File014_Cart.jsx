import { useContext } from "react";
import { MyContext } from "../context/MyContext";

function Cart() {
    const { cart, removeFromCart } = useContext(MyContext);

    // [{id: 1, name: "노트북", price: 1000, quantity: 1}]
    return (
        <div>
            <h2>장바구니</h2>
            <ul>
                {cart.map((item) => {
                    return (
                        <li key={item.id}>
                            {item.name} - {item.quantity}개
                            <button onClick={() => removeFromCart(item.id)}>
                                삭제
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Cart;
