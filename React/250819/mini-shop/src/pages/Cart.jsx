import { useDispatch } from "react-redux";
import { removeItem, removeAll } from "../store";

function Cart() {
    // 액션 디스패치 함수
    const dispatch = useDispatch();

    const handleCartItem = () => {
        dispatch(removeItem());
    };

    const handleCartItems = () => {
        dispatch(removeAll());
    };
    return (
        <div className="cart">
            <h1>장바구니</h1>
            <ul>
                <li>
                    <article>
                        <p className="name">상품명</p>
                        <p className="price">가격</p>
                        <button onClick={() => handleCartItem()}>제거</button>
                    </article>
                </li>
            </ul>
            <p className="total">합계: price</p>
            <button onClick={() => handleCartItems()}>전체 비우기</button>
        </div>
    );
}
