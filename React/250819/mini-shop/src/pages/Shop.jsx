import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store";

function Shop() {
    const [items, setItems] = useState([
        { id: 1, name: "Keyboard", price: 49000 },
        { id: 2, name: "Mouse", price: 29000 },
        { id: 3, name: "Monitor", price: 199000 },
    ]);

    // 액션 디스패치 함수
    const dispatch = useDispatch();

    const handleCart = (item) => {
        dispatch(addItem(item));
    };

    return (
        <div>
            <h1>Shop Page</h1>
            <ul>
                {items.map((item) => {
                    return (
                        <li key={item.id}>
                            <article>
                                <p className="name">{item.name}</p>
                                <p className="price">{item.price}</p>
                                <button onClick={() => handleCart(item)}>
                                    담김
                                </button>
                            </article>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
export default Shop;
