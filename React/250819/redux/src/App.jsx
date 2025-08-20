// state가 하나만 변경되어도 Context의 값을 가지고 있는 모든 컴포넌트가 리렌더링이 되버림
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const initUserData = {
    name: "전유진",
    email: "zeezee@email.com",
    cart: {
        items: [],
        totalPrice: 0,
    },
};

const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(initUserData);

    const updateCartTotal = (newTotal) => {
        setUserData((prev) => {
            return {
                ...prev,
                cart: {
                    ...prev.cart,
                    totalPrice: newTotal,
                },
            };
        });
    };

    return (
        //<UserContext.Provider> react19부터 .Provider 생략가능
        <UserContext value={{ userData, updateCartTotal }}>
            {children}
        </UserContext>
    );
};

const CartTotal = () => {
    console.log("CartTotal 렌더링");

    const { userData } = useContext(UserContext);

    return <div>총액: {userData.cart.totalPrice}</div>;
};

const UserName = () => {
    console.log("UserName 렌더링");

    const { userData } = useContext(UserContext);

    return <div>사용자: {userData.name}</div>;
};

const UpdateCart = () => {
    console.log("UpdateCart 렌더링");

    const { updateCartTotal } = useContext(UserContext);

    return (
        <button onClick={() => updateCartTotal(Math.random() * 1000)}>
            장바구니 업데이트
        </button>
    );
};

function App() {
    return (
        <UserProvider>
            <CartTotal />
            <UserName />
            <UpdateCart />
        </UserProvider>
    );
}

export default App;

// UpdateCart 버튼 누르면,
// CartTotal, UserName, UpdateCart 모두 다시 렌더링 됨
// Context의 단점(state가 하나만 변경되어도 Context의 값을 가지고 있는 모든 컴포넌트가 리렌더링이 되버림)

// redux는 subscribe한 컴포넌트만 렌더링 됨.

// 외부 변수에 영향받지 않는 함수 = 순수 함수
// 리듀서 함수는 이전 상태(state)와 액션 객체 파라미터에 대해서만 의존해야 합니다. 파라미터 외의 값들(외부 변수 등)에 영향받으면 안 됩니다.
